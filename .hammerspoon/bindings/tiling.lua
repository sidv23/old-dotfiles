local highlightWindow = require('ext.drawing').highlightWindow
local sendtoSpace = require('ext.spaces').sendToSpace
local capitalize      = require('ext.utils').capitalize
local window = require('ext.window')
local activeScreen = require('ext.screen').activeScreen
local capitalize = require('ext.utils').capitalize
local cycleWindows = require('ext.window').cycleWindows
local focusScreen = require('ext.screen').focusScreen
local forceFocus = require('ext.window').forceFocus

local module = {}
local hhtwm  = wm.cache.hhtwm

local APP_WINDOWS_ONLY = false
local ONLY_FRONTMOST = true
local SCREEN_WINDOWS_ONLY = true
local STRICT_ANGLE = true

-- apply function to a window with optional params, saving it's position for restore
local doWin = function(fn)
    return function()
        local win = hs.window.frontmostWindow()

        if win and not win:isFullScreen() then
            window.persistPosition(win, 'save')
            fn(win)
            highlightWindow(win)
        end
    end
end

local move = function(dir)
  local win = hs.window.frontmostWindow()

  if hhtwm.isFloating(win) then
    local directions = {
      west  = 'left',
      south = 'down',
      north = 'up',
      east  = 'right'
    }

    hs.grid['pushWindow' .. capitalize(directions[dir])](win)
  else
    hhtwm.swapInDirection(win, dir)
  end

  highlightWindow()
end

local throw = function(dir)
  local win = hs.window.frontmostWindow()

  if hhtwm.isFloating(win) then
    hs.grid['pushWindow' .. capitalize(dir) .. 'Screen'](win)
  else
    hhtwm.sendToSpace(win, dir)
  end

  highlightWindow()
end

local resize = function(resize)
  local win = hs.window.frontmostWindow()

  if hhtwm.isFloating(win) then
    hs.grid['resizeWindow' .. capitalize(resize)](win)

    highlightWindow()
  else
    hhtwm.resizeLayout(resize)
  end
end

module.start = function()
  local bind = function(key, fn)
    hs.hotkey.bind({ 'cmd','rightcmd', 'rightalt', 'rightshift', 'rightctrl' }, key, fn, nil, fn)
  end

  -- move window
  hs.fnutils.each({
    { key = 'left', dir = "west"  },
    { key = 'down', dir = "south" },
    { key = 'up', dir = "north" },
    { key = 'right', dir = "east"  },
  }, function(obj)
    bind(obj.key, function() move(obj.dir) end)
  end)

  -- -- throw between screens
  -- hs.fnutils.each({
  --   { key = ']', dir = 'prev' },
  --   { key = '[', dir = 'next' },
  -- }, function(obj)
  --   bind(obj.key, function() throw(obj.dir) end)
  -- end)

  bind('[', hhtwm.thin)
  bind(']', hhtwm.wide)

  -- toggle [f]loat
  bind('\\', function()
    local win = hs.window.frontmostWindow()

    if not win then return end

    hhtwm.toggleFloat(win)

    if hhtwm.isFloating(win) then
      hs.grid.center(win)
    end

    highlightWindow()
  end)

  hs.hotkey.bind({'ctrl'}, 'n', function() spaces.createSpace(true) end, nil, function() spaces.createSpace(true) end)


  -- [r]eset
  bind('delete', hhtwm.reset)

  -- re[t]ile
  bind('-', hhtwm.tile)

  -- [e]qualize
  bind('=', hhtwm.equalizeLayout)

  -- [c]enter window
  bind('return', function()
    local win = hs.window.frontmostWindow()

    if not hhtwm.isFloating(win) then
      hhtwm.toggleFloat(win)
    end

    -- win:centerOnScreen()
    hs.grid.center(win)
    highlightWindow()
  end)

  -- toggle [z]oom window
  bind('space', function()
    local win = hs.window.frontmostWindow()

    if not hhtwm.isFloating(win) then
      hhtwm.toggleFloat(win)
      hs.grid.maximizeWindow(win)
    else
      hhtwm.toggleFloat(win)
    end

    highlightWindow()
  end)

  -- throw window to space (and move)
  for n = 0, 9 do
    local idx = tostring(n)

    -- important: use this with onKeyReleased, not onKeyPressed
    hs.hotkey.bind({ 'rightcmd', 'rightalt', 'rightshift', 'rightctrl' }, idx, nil, function()
      local win = hs.window.focusedWindow()

      -- if there's no focused window, just move to that space
      if not win then
        hs.eventtap.keyStroke({ 'ctrl' }, idx)
        return
      end

      local isFloating = hhtwm.isFloating(win)
      local success    = hhtwm.throwToSpace(win, n)

      -- if window switched space, then follow it (ctrl + 0..9) and focus
      if success then
        hs.eventtap.keyStroke({ 'ctrl' }, idx)

        -- retile and re-highlight window after we switch space
        hs.timer.doAfter(0.05, function()
          if not isFloating then hhtwm.tile() end
          highlightWindow(win)
        end)
      end
    end)
  end
end

module.stop = function()
end

return module
