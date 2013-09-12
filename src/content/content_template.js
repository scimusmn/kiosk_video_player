/**
 * @file template.js
 *
 * Fill in the empty ""'s below with content for your video kiosk.
 * You can add as many videos as you'd like to the "videos" array. Remove any empty sets if you have less than 3.
 *
 * The "config" array at the bottom is used by the HTML template to pull in your videos and images.
 * Fill in these properties:
 * -- Theme: The project name you used to run new-project.sh (example: history_colorado).
 * -- Subtheme: This will be added as a body class to the HTML document. Allows for component-specific styles in your CSS.
 * -- Component_ID: The component number for this kiosk (example: 0425). Used to pull in button thumbnails.
 *
 * Once you've filled this in, delete this comment block and give it a better file name.
 * Something like "componentNumber_short_title.js" is nice.
 * Example: 0425_pine_beetles.js.
*/

var kiosk = {
  content: {
    page_title: "",
    videos: [
      {
        title : "",
        subtitle : ""
      },
      {
        title : "",
        subtitle : ""
      },
      {
        title : "",
        subtitle : ""
      }
    ]
  },
  config: {
    theme: "",
    subtheme: "",
    component_id: ""
  }
}
