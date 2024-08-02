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

// Endpoint to retrieve all artist
/**
 * @name `GET` `/artists`
 * @description Route to retrieve info on all artists
 * @kind API query
 * @returns JSON response
 * @example <caption>JSON response</caption>
{
    "status": "success",
    "data": {
        "id": 2,
        "name": "Jay-Z"
    }
}
 */

app.get("/artists/", async function (req, res) {
  const artists = await getArtists();
  res.status(200).json({ status: "success", data: artists });
});

// Endpoint to retrieve a artist by id
/**
 * @name `GET` `/artists/:id`
 * @description Route to retrieve info on all artists
 * @kind API query
 * @param {number} id - Artist id to retrieve
 * @returns JSON response
 * @example <caption>JSON response</caption>
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "name": "Dua Lipa"
        },
        {
            "id": 2,
            "name": "Jay-Z"
        },
        {
            "id": 3,
            "name": "Def Leppard"
        },
        {
            "id": 4,
            "name": "Muse"
        }
    ]
}
 */

app.get("/artists/:id", async function (req, res) {
  const id = req.params.id;
  const artist = await getArtistById(id);

  // Assume 404 status if the artist is not found
  if (!artist) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Artist not found" } });
  }

  res.status(200).json({ status: "success", data: artist });

});

// Endpoint to create a new artist
/**
 * @name `POST` `/artists`
 * @description Route to create new artist record
 * @kind API query
 * @param {string} body.name - Artist name
 * @returns JSON response
 * @example <caption>JSON response</caption>
{
    "status": "success",
    "data": {
        "id": 5,
        "name": "Jocelyne"
    }
}
 */

app.post("/artists/", async function (req, res) {
  const data = req.body;
  const artist = await createArtist(data);
  res.status(201).json({ status: "success", data: artist });
});

// Endpoint to update a specific artist by id
/**
 * @name `PATCH` `/artists/:id`
 * @description Route to update an artist by id
 * @kind API query
 * @param {number} id - Artist id to update
 * @param {string} body.name - Artist name
 * @returns JSON response
 * @example <caption>JSON response</caption>
{
    "status": "success",
    "data": {
        "id": 5,
        "name": "Jocelyne Strogen-Jones"
    }
}
 */

app.patch("/artists/:id", async function (req, res) {
  const id = req.params.id;
  const data = req.body;
  const artist = await updateArtistById(id, data);
  // Assume 404 status if the artist is not found
  if (!artist) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "artist not found" } });
  }
  res.status(200).json({ status: "success", data: artist });
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
 * @param {number} id - Album id to retrieve
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
