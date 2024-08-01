## Objective

Create github project with cards, convert to issues and consolidate into milestones


    Design and create a database schema by writing SQL statements to define tables and relationships.
    Write a SQL script to set up the database schema, creating any necessary tables and columns (we've made you a script - you just need to change it 🙂)
    Connect to an external PostgreSQL database from a Node/Express app using the pg package (we've done most of this for you ⚡️)
    Secure the database credentials within environment variables accessed from a .env file.
    Implement basic CRUD API routes in Express that query the database and return JSON responses.
    Return appropriate HTTP status codes and messages based on API request outcomes.

## Development Rules

    Make frequent, small commits to track and manage changes easily.
    Write pseudocode when we start a new issue

## Technical Requirements

Response Specification: All JSON responses from your API should adhere to the JSend specification. This specification provides a consistent structure for your responses, making your API more predictable and easier to interact with. [JSend](https://github.com/omniti-labs/jsend)


## Use the below as the basis for pseudocode

    HTTP Method
        Path
        Request Body (JSON)
        Response Body (JSON)
        Status Code
        Description
    GET
        /resource
        N/A
        List of resources
        200
        Retrieve all resources
    GET
        /resource/:id
        N/A
        A particular resource object
        200
        Retrieve a specific resource by its ID
    POST
        /resource
        New resource object
        An newly created resource object
        201
        Create a new resource
    PATCH
        /resource/:id
        Edited resource object 
        An edited resource object
        200
        Update the details of a specific resource
    DELETE
        /resource/:id
        N/A
        An deleted resource object
        200
        Remove a specific resource by its ID

## Milestones

    Plan and design your database schema (You should have a minimum of 2 tables that are linked with a primary and foreign key)
    Write a database initialisation script. Create a SQL script that will:
        Drop any existing tables (if they exist)
        Recreate all the tables based on the schema
        Populate the tables with some initial seed data
    Plan out your API routes and resources. Create your requirements tables similar to the one above.
    Set up a basic Express server with a test route, logging middleware and nodemon.
    Implement CRUD operations using the pg package to interact with your database.
    Test the API using tools like Postman or Thunder Client.

## Stretch Goals

    The stretch goals below are optional, so feel free to come up with your own too.
        Advanced Routing with Query Parameters
            Search: Add a search feature on the /resource endpoint. For instance, /resource?name=ResourceName could return resources with names matching the query.
            Sorting: Allow sorting of resources. For instance, /resource?sort=name could return resources sorted alphabetically by name.
        Error Handling and Responses
            If a resource with a specific ID isn't found, return a 404 Not Found status code and a clear error message.
            For other errors, such as server errors or bad request data, return appropriate status codes like 500 Internal Server Error or 400 Bad Request with clarifying error messages.
            Implement middleware for error handling in your Express server.
        In a separate repository, create a frontend for your API and use a UI and fetch to interact with it.


## Presentation Guidelines

    Prepare a 6-minute end-of-day demo.
    Each team will present to a coach.
    Each team member must participate in the presentation.

## Evaluation Criteria

    Teamwork: How well did the team work together? What worked well? What would you change for next time?
    Presentation: Was the presentation clear, concise, and kept on time?
    Plan Quality: How well was the project planned out? Did they create and follow a requirements table for their chosen resource? Did they plan their database tables/schema?
    Code Quality: Is the code clean, formatted and organised?
    Git Practices: Were changes documented with frequent, clear commits?
    Functionality: Does the API work as intended, and is it RESTful?
    Completion: Are all required features implemented?

## After hours work

    Jocelyne - look into JSDoc
    Pieter - Album art
    Jocelyne - readme.md

```js
/**
 * Route to add a new activity
 * @name POST /activities
 * @kind API query
 * @param {string} body.activity_type - Activity type
 * @param {number} body.activity_duration - Activity duration in minutes
 * @returns {object}
 */
```