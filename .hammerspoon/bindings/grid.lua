local window = require('ext.window')
local activeScreen = require('ext.screen').activeScreen
local capitalize = require('ext.utils').capitalize
local cycleWindows = require('ext.window').cycleWindows
local focusScreen = require('ext.screen').focusScreen
local forceFocus = require('ext.window').forceFocus
local highlightWindow = require('ext.drawing').highlightWindow

local cache = {}
local module = {
    cache = cache
}

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

module.start = function()
  local bind = function(key, fn)
    hs.hotkey.bind({'rightcmd', 'rightalt', 'rightshift', 'rightctrl'}, key, fn, nil, fn)
  end

  hs.fnutils.each({
    { key = 'h', fn = hs.grid.pushWindowLeft       },
    { key = 'j', fn = hs.grid.pushWindowDown       },
    { key = 'k', fn = hs.grid.pushWindowUp         },
    { key = 'l', fn = hs.grid.pushWindowRight      },

    { key = '[', fn = hs.grid.pushWindowNextScreen },
    { key = ']', fn = hs.grid.pushWindowPrevScreen },

    { key = ',', fn = hs.grid.resizeWindowThinner  },
    { key = '.', fn = hs.grid.resizeWindowWider    },

    { key = '=', fn = hs.grid.resizeWindowTaller   },
    { key = '-', fn = hs.grid.resizeWindowShorter  },

    { key = 'z', fn = hs.grid.maximizeWindow       },
    { key = 'c', fn = hs.grid.center               },
  }, function(object)
    bind(object.key, doWin(object.fn))
  end)

  bind('u', function() window.persistPosition(hs.window.frontmostWindow(), 'undo') end)
  bind('r', function() window.persistPosition(hs.window.frontmostWindow(), 'redo') end)
end

module.stop = function()
end

return module
