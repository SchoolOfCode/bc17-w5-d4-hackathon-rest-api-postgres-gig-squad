import { pool } from "../index.js";

// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS artists CASCADE;
        DROP TABLE IF EXISTS albums CASCADE;
    `);

    // Create the artists table
    await pool.query(`
        CREATE TABLE artists (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
    `);

    // Create the albums table with a foreign key to the artists table
    await pool.query(`
        CREATE TABLE albums (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            published_date DATE,
            artist_id INT REFERENCES artists(id),
            release_id VARCHAR(255)
        );
    `);

    // Seed the artists table
    await pool.query(`
        INSERT INTO artists (name)
        VALUES 
            ('Dua Lipa'),
            ('Jay-Z'),
            ('Def Leppard'),
            ('Muse');
    `);

    // Seed the albums table
    /* Note that the release_id is a newly added database column that was introduced
    to link an album in our database to an album (a.k.a., a release) on the MusicBrainz (https://musicbrainz.org) web API.
    For more details on this, see the comments on the "fetchAlbumArt" function in the "/albums.js" file. */
    await pool.query(`
        INSERT INTO albums (title, published_date, artist_id, release_id)
        VALUES 
            ('Dua Lipa', '2017-06-02', 1, 'f4f331b9-ac98-4e96-ab69-f7710c9da350'),
            ('Future Nostalgia', '2020-03-27', 1, '4bc978b6-332b-4361-966b-ddd13b9c23fd'),
            ('Reasonable Doubt', '1996-06-25', 2, '52aa9594-34f8-4de8-8976-d0c793986b31'),
            ('The Blueprint', '2001-09-11', 2, 'ddf74bde-72d0-456c-a772-6f5c2840eac4'),
            ('Hysteria', '1987-08-03', 3, '58b8eab9-cd8b-4c86-9031-ddb126071de4'),
            ('Black Holes and Revelations', '2006-07-03', 4, 'b06c3767-685c-3ad0-93a3-e38895601aa9'),
            ('Absolution', '2003-09-22', 4, 'a0a2b395-7989-4ec7-99f9-9bc9425c53b7'),
            ('The 2nd Law', '2012-10-01', 4, '2e5053f0-3023-4700-9660-a876145819a1');
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
