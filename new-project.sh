#! /bin/bash

# Make a folder for content and put the content in it
mkdir src/content/$1
cp src/content/content_template.js src/content/$1

# Make folders for thumbnail images and theme images
mkdir assets/images/$1
mkdir assets/themes/$1

# Make a theme folder and put the stylesheet template in it
mkdir src/themes/$1
cp src/themes/theme_template.css src/themes/$1
