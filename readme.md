## Kiosk video player

### Description 
HTML5 and JavaScript-powered video player for use on an exhibit kiosk with a touchscreen monitor.

### Install
1. Follow the SMM exhibit media Chrome kiosk setup guide: [Mac](http://projects.smm.org/atrium/media/node/284859) / [Windows 7](http://projects.smm.org/atrium/media/node/283722).
2. From this repository, you only need the `build` and `assets` directories on the kiosk computer.
3. Open `build/index.html` in Chrome, copy the URL, and set that as the home page in [Stele's config file](https://github.com/scimusmn/stele/blob/master/cfg/browser.cfg.default#L4).

### Create a new video player kiosk

#### Add your content 
1. Make a new folder for the project in `src/content`. Use underscores for spaces. 
Example: `history_colorado`
2. Copy an existing JS file from a project directory in the content folder [like this one](https://github.com/scimusmn/kiosk_video_player/blob/master/src/content/history_colorado/hc_0425_pine_beetles.js). Using the same object structure as what you copied, swap out content. Add items to the videos array if needed.
3. Fill in parameters in the config object: 
  * Theme: Use the same string you used for the folder in step 1. This is used to pull in media assets (videos, images).
  * Subtheme: This will be added as a body class to the HTML document and allows for overriding theme styles per-component if needed.
  * Component_ID: The component number for this kiosk. Used to pull in thumbnail images.
4. Open up `src/index.html` and swap out the content JS file [here](https://github.com/scimusmn/kiosk_video_player/blob/master/src/index.html#L36).

#### Whip up some media assets
5. Videos should be rendered in an MP4 wrapper and saved to `assets/videos`. 
  * Name the files `video_0.mp4`, `video_1.mp4`, `video_2.mp4`, etc.
6. Thumbnails should be JPGs and saved to `assets/images/your-project-name` (same name from step 1).
* Name the files using the component number and the video number they go with. 
Examples: `0425_video_0.jpg`, `0425_video_1.jpg`, `0425_video_2.jpg`, etc

#### Add a theme
7. Make a new folder for the project's theme in `src/themes`. Use the same name you used for the content folder in step 1.
8. Create a stylesheet in that folder. CSS it up.
9. Files you reference from the stylesheet (for example, a background image) should be saved to `assets/themes/your-project-name`.

#### Compile a build 
10. To compile builds, you'll need to install [Grunt](http://gruntjs.com/getting-started) (and its dependencies).
11. Since this project has already been configured with a package.json and a Gruntfile, you can quickly install all the dependencies for the project's Grunt tasks by running `npm install` from the project directory.
12. Update `Gruntfile.js` to reference the files you created in the `content` and `themes` directories. Remove references to files from past projects.
13. After making changes to files in the `src` directory as described above, update the build by running `grunt` from the root of the project folder.
14. Install the completed build onto the kiosk computer as described above.

### Roadmap/TODOs
* Think about whether or not builds should be saved in this repository.
* Same with text and image (thumbnail) content.
* `Gruntfile.js` has to be updated per component. Maybe it should take arguments from the kiosk config object, or something, so it doesn't have to change.
* Set up Grunt to precompile the Handlebars template and include the runtime instead of the whole jam.
* Implement a grid system (or something) so that X amount of videos will lay out nicely without much custom per-component CSS.
* Unit tests?
* Think of a cuter name than "kiosk video player." `!important`
