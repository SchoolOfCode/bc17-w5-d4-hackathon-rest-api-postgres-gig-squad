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

// Endpoint to retrieve all albums
app.get("/albums/", async function (req, res) {
  const albums = await getAlbums();
  res.status(200).json({ status: "success", data: albums });
});

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
