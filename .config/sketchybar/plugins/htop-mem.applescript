tell application "iTerm"
	activate
	create window with default profile command "zsh -c \"htop -s PERCENT_MEM && read\""
end tell
