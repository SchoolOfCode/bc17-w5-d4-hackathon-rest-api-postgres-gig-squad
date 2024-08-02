// Import the required modules
import express from "express";

// Import your helper functions for your first resource (artists) here
import {
  getArtists,
  getArtistById,
  createArtist,
  updateArtistById,
  deleteArtistById,
} from "./artists.js";

// Import your helper functions for your second resource (albums) here
import {
  getAlbums,
  getAlbumById,
  createAlbum,
  updateAlbumById,
  deleteAlbumById,
} from "./albums.js";

// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Artist Route Handlers

// Endpoint to retrieve all artists
app.get("/artists/", async function (req, res) {
  console.log("I'm alive");
  res.status(200).send("I'm alive!");
});

// Endpoint to retrieve a artist by id
app.get("/artists/:id", async function (req, res) {

});

// Endpoint to create a new artist
app.post("/artists/", async function (req, res) {

});

// Endpoint to update a specific artist by id
app.patch("/artists/:id", async function (req, res) {

});

// Endpoint to delete a specific artist by id
app.delete("/artists/:id", async function (req, res) {

});

// Album Route Handlers

/**
 * @name `GET` `/albums`
 * @description Route to retrieve info on all albums
 * @kind API query
 * @returns JSON response
 * @example <caption>JSON response</caption>
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "title": "Dua Lipa",
            "published_date": "2017-06-01T23:00:00.000Z",
            "artist_id": 1,
            "release_id": "f4f331b9-ac98-4e96-ab69-f7710c9da350",
            "album_art_url": "http://coverartarchive.org/release/f4f331b9-ac98-4e96-ab69-f7710c9da350/25498757032-500.jpg"
        },
        {
            "id": 2,
            "title": "Future Nostalgia",
            "published_date": "2020-03-27T00:00:00.000Z",
            "artist_id": 1,
            "release_id": "4bc978b6-332b-4361-966b-ddd13b9c23fd",
            "album_art_url": "http://coverartarchive.org/release/4bc978b6-332b-4361-966b-ddd13b9c23fd/27536956866-500.jpg"
        }
    ]
}
 */

// Endpoint to retrieve all albums
app.get("/albums/", async function (req, res) {
  const albums = await getAlbums();
  res.status(200).json({ status: "success", data: albums });
});

/**
 * @name `GET` `/albums/:id`
 * @description Route to retrieve info on a single album
 * @kind API query
 * @param {number} id - Activity type
 * @returns JSON response
 * @example <caption>JSON response</caption>
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "title": "Dua Lipa",
            "published_date": "2017-06-01T23:00:00.000Z",
            "artist_id": 1,
            "release_id": "f4f331b9-ac98-4e96-ab69-f7710c9da350",
            "album_art_url": "http://coverartarchive.org/release/f4f331b9-ac98-4e96-ab69-f7710c9da350/25498757032-500.jpg"
        }
    ]
}
 */

// Endpoint to retrieve a album by id
app.get("/albums/:id", async function (req, res) {
  const id = req.params.id;
  const album = await getAlbumById(id);

  // Assume 404 status if the album is not found
  if (!album) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Album not found" } });
  }

  res.status(200).json({ status: "success", data: album });
});

// Endpoint to create a new album
app.post("/albums/", async function (req, res) {

});

// Endpoint to update a specific album by id
app.patch("/albums/:id", async function (req, res) {

});

// Endpoint to delete a specific album by id
app.delete("/albums/:id", async function (req, res) {
  
});

// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
