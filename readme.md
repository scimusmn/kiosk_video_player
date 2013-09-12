## Kiosk video player

### Description 
HTML5 and JavaScript-powered video player for use on an exhibit kiosk with a touchscreen monitor.

### Install
1. Follow the SMM exhibit media Chrome kiosk setup guide: [Mac](http://projects.smm.org/atrium/media/node/284859) / [Windows 7](http://projects.smm.org/atrium/media/node/283722).
2. From this repository, you only need the `build` and `assets` directories on the kiosk computer.
3. Open `build/index.html` in Chrome, copy the URL, and set that as the home page in [Stele's config file](https://github.com/scimusmn/stele/blob/master/cfg/browser.cfg.default#L4).

### Developer documentation
Starting a new video kiosk? Follow directions [here](https://github.com/scimusmn/kiosk_video_player/blob/master/src/readme.md).

### Roadmap/TODOs
* Think about whether or not builds should be saved in this repository.
* Same with text and image (thumbnail) content.
* Set up Grunt to precompile the Handlebars template and include the runtime instead of the whole jam.
* Implement a grid system (or something) so that X amount of videos will lay out nicely without much custom per-component CSS.
* Unit tests?
* Think of a cuter name than "kiosk video player." `!important`
