#!/bin/bash

# Default settings
SOURCE=$HOME"/.config/neofetch/henrok"

# Function which detects the AGS theme
function get_accent() {
	if [ $(ags -b hypr -r "ags.Service.Theme.getSetting('accent')") = '$red' ]; then
        ACOLOR=1
        TCOLOR=1
    elif [ $(ags -b hypr -r "ags.Service.Theme.getSetting('accent')") = '$green' ]; then
        ACOLOR=2
        TCOLOR=2
    elif [ $(ags -b hypr -r "ags.Service.Theme.getSetting('accent')") = '$yellow' ]; then
        ACOLOR=3
        TCOLOR=3
    elif [ $(ags -b hypr -r "ags.Service.Theme.getSetting('accent')") = '$blue' ]; then
        ACOLOR=4
        TCOLOR=4
    elif [ $(ags -b hypr -r "ags.Service.Theme.getSetting('accent')") = '$magenta' ]; then
        ACOLOR=5
        TCOLOR=5
    elif [ $(ags -b hypr -r "ags.Service.Theme.getSetting('accent')") = '$teal' ]; then
        ACOLOR=6
        TCOLOR=6
    else
		ACOLOR=7
        TCOLOR=7
	fi
}

# Check if AGS is running, if so, get the theme
if [ ! $(pgrep -f ags) ]; then
	ACOLOR="distro"
	TCOLORS="distro"
	clear
	neofetch --source $SOURCE
else
	get_accent
	TCOLORS=$TCOLOR" "$TCOLOR" "$TCOLOR" "$TCOLOR" "$TCOLOR" 7"
	clear
	neofetch --source $SOURCE --ascii_colors $ACOLOR --colors $TCOLORS
fi
