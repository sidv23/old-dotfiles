#!/usr/bin/env bash

COUNT=$(echo $(~/.config/sketchybar/plugins/unread_count.osascript))
sketchybar -m --set $NAME label="$COUNT"

# RUNNING=$(osascript -e 'if application "Spark" is running then return 0')
# COUNT=0
# 
# if [ $RUNNING == 0 ]; then
#   COUNT=$(osascript -e 'tell application "Spark" to return the unread count of inbox')
#   sketchybar -m --set $NAME label="$COUNT"
# else
#   sketchybar -m --set $NAME label=
# fi

