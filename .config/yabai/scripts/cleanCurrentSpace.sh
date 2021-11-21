#!/bin/bash
yabai -m space --focus "$(yabai -m query --spaces --display | jq 'nth(index(map(select(.focused == 1))) + 1).index (reverse | nth(index(map(select(.focused == 1))) + 1).index) 0')" && yabai -m space recent --destroy
