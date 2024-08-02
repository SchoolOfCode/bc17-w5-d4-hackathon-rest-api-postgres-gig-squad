<a name="`GET` `/albums`"></a>

## `GET` `/albums` ⇒
Route to retrieve info on all albums

**Kind**: global API query  
**Returns**: JSON response  
**Example** *(JSON response)*  
```js
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
```
<a name="`GET` `/albums/_id`"></a>

## `GET` `/albums/:id` ⇒
Route to retrieve info on a single album

**Kind**: global API query  
**Returns**: JSON response  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Activity type |

**Example** *(JSON response)*  
```js
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
```
