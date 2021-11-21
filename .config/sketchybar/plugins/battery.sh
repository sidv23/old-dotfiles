#!/bin/bash

get_battery() {
  local battery status
  battery="$(pmset -g batt)"
  BATTERY_LABEL="${battery%\%*}"
  BATTERY_LABEL="${BATTERY_LABEL##*	}"
  read -r _ _ _ status _ <<< "$battery"
  BATTERY_HIGHLIGHT="off"
  BACKGROUND="0xfff98b00"
  if [ "$status" = "'AC" ]
  then
    BATTERY_ICON=""
    BACKGROUND="0xff4caf50"
  else
    if [ "$BATTERY_LABEL" -le 25 ]
    then
      BATTERY_ICON=""
      # BATTERY_HIGHLIGHT="on"
      BACKGROUND="0xffd32f2f"
    else
      BATTERY_ICON=" "
      BACKGROUND="0xff1976d2"
    fi
  fi
}

get_battery

sketchybar -m --set battery icon="$BATTERY_ICON" background.color="$BACKGROUND" label="${BATTERY_LABEL}%"
