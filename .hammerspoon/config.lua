config = {}
config.applications = {
    ['Alfred'] = {
        bundleID = 'com.runningwithcrayons.Alfred',
        local_bindings = {'c', 'space', 'o'}
    },
    ['Kitty'] = {
        bundleID = 'net.kovidgoyal.kitty',
        hyper_key = 't',
        preferred_display = 1,
        tags = {'#coding'}
    },
    -- ['Brave'] = {
    --     bundleID = 'com.brave.browser',
    --     hyper_key = 'k',
    --     preferred_display = 1
    -- },
    ['Firefox'] = {
        bundleID = 'org.mozilla.firefox',
        hyper_key = 'b',
        preferred_display = 1
    },
    ['Code'] = {
        bundleID = 'com.microsoft.VSCode',
        hyper_key = 'c',
        preferred_display = 2
    },
    ['Zoom'] = {
        bundleID = 'us.zoom.xos',
        hyper_key = 'z',
        preferred_display = 3
    },
    ['Slack'] = {
        bundleID = 'com.tinyspeck.slackmacgap',
        hyper_key = 'i',
        preferred_display = 3,
        tags = {'#distraction', '#communication'}
    },
    ['Spark'] = {
        bundleID = 'com.readdle.smartemail-Mac',
        hyper_key = 'e',
        preferred_display = 3,
        tags = {'#distraction', '#communication'}
    },
    ['Finder'] = {
        bundleID = 'com.apple.finder',
        hyper_key = 'f'
    },
    ['Hammerspoon'] = {
        bundleID = 'org.hammerspoon.Hammerspoon',
        hyper_key = 'h'
    },
    ['Messages'] = {
        bundleID = 'com.apple.iChat',
        hyper_key = 'q',
        tags = {'#communication', '#distraction'}
    },
    ['Steam'] = {
        bundleID = 'com.valvesoftware.steam',
        tags = {'#distraction'}
    },
    ['Spotify'] = {
        bundleID = 'com.spotify.client'
    }
}
