#!/usr/bin/env bash
RUNNING=$(osascript -e 'if application "Spark" is running then return 0')
COUNT=0

if [ $RUNNING == 0 ]; then
  COUNT=$(osascript -e 'tell application "Spark" to return the unread count of inbox')
  sketchybar -m --set $NAME label="$COUNT"
else
  sketchybar -m --set $NAME label=
fi

