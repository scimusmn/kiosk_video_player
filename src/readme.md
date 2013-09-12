### Create a new video player kiosk

If this is the first component for a new exhibit project:
1. Think of a good name for the project - lowercase, underscores replacing spaces, recognizable but short. Something like "maya" or "history_colorado".
2. Run `new-project.sh` with the project name as an argument to create required files: `./new-project.sh your_project_name`

If this *is not* the first video component for a project, you'll use your existing content and theme folders.
  * Your new component should use the same stylesheet. This will keep styles consistent across an exhibit. Notes on overriding styles using the sub-theme property are in the [CSS template file](https://github.com/scimusmn/kiosk_video_player/blob/master/src/themes/theme_template.css).
  * Your new component should have its own content JS file. Copy your existing one, or the template, edit as needed, and give the file a component-specific file name.

#### Add your content 
1. Open up `src/content/your-project-name/content_template.js`.
2. Read the directions there, and fill in your text content as specified.

#### Whip up some media assets
1. Videos should be rendered in an MP4 wrapper and saved to `assets/videos`.
  * Name the files `video_0.mp4`, `video_1.mp4`, `video_2.mp4`, etc.
2. Thumbnails should be JPGs. Save those to `assets/images/your-project-name`.
* Name the files using the component number and the video number they go with. 
Examples: `0425_video_0.jpg`, `0425_video_1.jpg`, `0425_video_2.jpg`, etc

#### Add a theme
1. Open up `src/themes/your-project-name/theme_template.css`.
2. Write some CSS and rename the file to something project-specific.

#### Compile a build 
1. To compile builds, you'll need to install [Grunt](http://gruntjs.com/getting-started) (and its dependencies).
2. Since this project has already been configured with a package.json and a Gruntfile, you can quickly install all the dependencies for the project's Grunt tasks by running `npm install` from the project directory.
3. Update `package.json` to reference the files you created in the `src/content` and `src/themes` directories.
4. After making changes to files in the `src` directory as described above, update the build by running `grunt` from the root of the project folder.
5. [Install the completed build onto the kiosk computer](https://github.com/scimusmn/kiosk_video_player#install).
