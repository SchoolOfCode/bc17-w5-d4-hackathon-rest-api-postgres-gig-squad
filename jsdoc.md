<a name="`GET` `/artists`"></a>

## `GET` `/artists` ⇒
Route to retrieve info on all artists

**Kind**: global API query  
**Returns**: JSON response  
**Example** *(JSON response)*  
```js
{
    "status": "success",
    "data": {
        "id": 2,
        "name": "Jay-Z"
    }
}
```
<a name="`GET` `/artists/_id`"></a>

## `GET` `/artists/:id` ⇒
Route to retrieve info on all artists

**Kind**: global API query  
**Returns**: JSON response  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Artist id to retrieve |

**Example** *(JSON response)*  
```js
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
```
<a name="`POST` `/artists`"></a>

## `POST` `/artists` ⇒
Route to create new artist record

**Kind**: global API query  
**Returns**: JSON response  

| Param | Type | Description |
| --- | --- | --- |
| body.name | <code>string</code> | Artist name |

**Example** *(JSON response)*  
```js
{
    "status": "success",
    "data": {
        "id": 5,
        "name": "Jocelyne"
    }
}
```
<a name="`PATCH` `/artists/_id`"></a>

## `PATCH` `/artists/:id` ⇒
Route to update an artist by id

**Kind**: global API query  
**Returns**: JSON response  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Artist id to update |
| body.name | <code>string</code> | Artist name |

**Example** *(JSON response)*  
```js
{
    "status": "success",
    "data": {
        "id": 5,
        "name": "Jocelyne Strogen-Jones"
    }
}
```
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
| id | <code>number</code> | Album id to retrieve |

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
