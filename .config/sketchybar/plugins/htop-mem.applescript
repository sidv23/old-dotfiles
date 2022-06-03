tell application "iTerm"
	activate
	create window with default profile command "zsh -c \"htop -s PERCENT_MEM\""
	# create window with default profile command "zsh -c \"bpytop \" "
end tell
