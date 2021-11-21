package.path = package.path .. ";" ..  hs.configdir .. "~/.hammerspoon/Spoons/?.spoon/init.lua"

hs.loadSpoon("SpoonInstall")
spoon.SpoonInstall.use_syncinstall = true
Install = spoon.SpoonInstall

Install:andUse("URLDispatcher", {
    config = {
        url_patterns = work_url_patterns,
        default_handler = "com.apple.Safari"
    },
    start = true
})


-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------

config = {
    wm = {
        defaultDisplayLayouts = 'main-left'
    },

    window = {
        highlightBorder = false,
        highlightMouse = true,
        historyLimit = 0
    }
}


require('console').init()
require('overrides').init()

-- ensure IPC is there
hs.ipc.cliInstall()

-- lower logging level for hotkeys
require('hs.hotkey').setLogLevel("warning")


-- requires
bindings = require('bindings')
controlplane = require('utils.controlplane')
watchables = require('utils.watchables')
watchers = require('utils.watchers')
wm = require('utils.wm')

-- no animations
hs.window.animationDuration = 0.1


bindings.enabled = {'grid','ctrl-esc', 'f-keys', 'focus', 'global', 'tiling', 'term-ctrl-i'}


hyper = require('hyper')
require("config")
hyper.start(config)

hyper:bind({}, 'r', nil, function()
    hs.console.hswindow():focus()
end)
hyper:bind({'shift'}, 'r', nil, function()
    hs.reload()
end)

spaces = require("hs._asm.undocumented.spaces")
hhtwm = require('hhtwm')
hhtwm.start()



-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------
-- ---------------------------------------



-- start/stop modules
-- local modules = {bindings, controlplane, watchables, watchers, wm}
local modules = {bindings, wm}

hs.fnutils.each(modules, function(module)
    if module then
        module.start()
    end
end)

-- stop modules on shutdown
hs.shutdownCallback = function()
    hs.fnutils.each(modules, function(module)
        if module then
            module.stop()
        end
    end)
end


-- Finally, show a notification that we finished loading the config successfully
hs.notify.new({
    title = 'Hammerspoon',
    informativeText = 'Config loaded'
}):send()
