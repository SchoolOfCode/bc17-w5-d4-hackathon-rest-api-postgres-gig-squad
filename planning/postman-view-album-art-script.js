/* Postman post-response script "visualization" code only
 Concept originally taken from:
https://stackoverflow.com/questions/59949469/view-pictures-in-postman

DESCRIPTION:
To view the album art image in Postman using the fetched album art URL (part of all album HTTP responses),
use the details in the above-mentioned link and the code below to set up a Postman post-response script.
This will then allow you to "visualize" the album art image in Postman's response section.
  
IMPORTANT NOTE:
The above mentioned technique only works in the Postman desktop app.
It DOES NOT work is the VS code Postman extension, since the extension does not have the "Visualize" tab.

USAGE:
Copy all the code below in the Postman Desktop App's
Request section > Script tab > Post-response code window

Then execute any of the album express request handlers (routes) in app.js.

You will then see the album art for the returned album(s) displayed in Postman's response section under the "Visualize" tab. */

const responseData = pm.response.json().data;
let responseDataArray = [];
let postmanVisualizerHTML = "";

/* If a single album object is received (rather than an array of album objects),
then always add that single album object to an array, since the for loop below is "geared"
to run on an array of objects */
if (!Array.isArray(responseData)) {
  responseDataArray.push(responseData);
} else {
  responseDataArray = responseData;
}

for (let i = 0; i < responseDataArray.length; i++) {
  const albumTitle = responseDataArray[i].title;
  const albumArtURL = responseDataArray[i].album_art_url;

  if (albumArtURL) {
    postmanVisualizerHTML += `
            <div>
                <h1>Album Title - ${albumTitle}</h1>
                <img src="${albumArtURL}" width="350" height="350">
                <p>&nbsp;</p> <!-- forced spacer below albums -->
            </div>`;
  }
}

pm.visualizer.set(postmanVisualizerHTML);
