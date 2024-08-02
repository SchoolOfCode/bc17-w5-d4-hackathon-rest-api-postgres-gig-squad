// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getArtists() {
  // Query the database and return all artists

  // Define the SQL query to fetch all artists from the 'artists' table
  const queryText = `SELECT *
  FROM artists`;

// Use the pool object to send the query to the database
const result = await pool.query(queryText);

// The rows property of the result object contains the retrieved records
return result.rows;
}

export async function getArtistById(id) {
  // Query the database and return the artist with a matching id or null
}

export async function createArtist(artist) {
  // Query the database to create an artist and return the newly created artist
}

export async function updateArtistById(id, updates) {
  // Query the database to update the artist and return the newly updated artist or null
}

export async function deleteArtistById(id) {
  // Query the database to delete the artist and return the deleted artist or null
}
