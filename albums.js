// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

// Helper functions for this module

/* Function name: fetchAlbumArt
Function purpose: Fetches an album art URL from a web API and "inject" it as a new property on each album object inside the album array
Function parameters: Expects an array of album objects as the albumRows parameter

Additional details: Fetch data from the coverartarchive.org API according to the album's MusicBrainz release id
(which is stored for each album record in the database in the "release_id" field), as detailed here:
https://coverartarchive.org/
and here
https://musicbrainz.org/doc/Cover_Art_Archive/API

IMPORTANT: For instructions on how to see the album art images directly in Postman,
see the "/planning/postman-view-album-art-script.js" file in this project */
async function fetchAlbumArt(albumRows) {
  try {
    // Copy the albumRows array that is passed as a parameter to this function to a new array (for error handling, i.e., try/catch reasons)
    const albumRowsUpdated = [...albumRows];

    // For each album row object in the album rows array
    for (let i = 0; i < albumRowsUpdated.length; i++) {
      // Fetch JSON data from the coverartarchive.org API
      const response = await fetch(
        `https://coverartarchive.org/release/${albumRowsUpdated[i].release_id}`
      );

      const data = await response.json();

      // If a valid album art URL was fetched, then add it as new property on the current albumRowsUpdated object
      let imageURL = "";

      if (data.images[0].thumbnails.large) {
        imageURL = data.images[0].thumbnails.large;
      }

      albumRowsUpdated[i].album_art_url = imageURL;
    }

    // And finally, return the updated albumRowsUpdated array of album objects
    return albumRowsUpdated;
  } catch (error) {
    // If an error occurs at any stage of this function's execution, just return the original, unaltered albumRows array
    return albumRows;
  }
}

// Album helper functions

export async function getAlbums() {
  // Query the database and return all albums

  // Define the SQL query to fetch all albums from the 'albums' table
  const queryText = `SELECT *
    FROM albums`;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // Fetch album art from a web API
  if (result.rows && result.rows.length > 0) {
    result.rows = await fetchAlbumArt(result.rows);
  }

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getAlbumById(id) {
  // Query the database and return the album with a matching id or null

  // Define the SQL query to fetch the albums with the specified id from the 'albums' table
  const queryText = `SELECT *
    FROM albums
    WHERE id = $1`;

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  let result = await pool.query(queryText, [id]);

  // Fetch album art from a web API
  if (result.rows && result.rows.length > 0) {
    result.rows = await fetchAlbumArt(result.rows);
  }

  // The rows property of the result object contains the retrieved records
  // If a album with the specified id exists, it will be the first element in the rows array
  // If no album exists with the specified id, the rows array will be empty
  return result.rows[0] || null;
}

export async function createAlbum(album) {
  // Query the database to create an album and return the newly created album
}

export async function updateAlbumById(id, updates) {
  // Query the database to update the album and return the newly updated album or null
}

export async function deleteAlbumById(id) {
  // Query the database to delete the album and return the deleted album or null
}
