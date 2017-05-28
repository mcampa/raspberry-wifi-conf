#!/usr/bin/env bash

fswatch -o . | while read f; do rsync  -avz -e ssh ./ pi@192.168.0.113:/home/pi/raspberry-wifi-conf/; done

