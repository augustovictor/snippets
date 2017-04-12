#!/bin/bash
# You must give permission to this file before executing it. Otherwise you'll get a 'permission denied' message.
# To do so you use: chmode +x verify-string-size.sh

WORD=$1

if [ "$WORD" = "" ]
then
	echo "No parameter provided. Type: ./`basename ${0}` someString"
else
	if [ "$1" != "-l" ]
	then
		echo "String entered: $WORD"
	fi

	case "$WORD" in
		-l) 
			WORD="${2}"
			echo "The string '$WORD' has ${#WORD} char elements."
		;;

		*)
			echo "To check string length type: ./`basename ${0}`-l someString"
			exit 1 # Command to come out of the program with status 1
		;;
	esac
fi
