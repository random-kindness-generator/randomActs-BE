# randomActs-BE

##Table Of Contents

- [Deployment](#deployment)
- [Tech Stack](#techStack)
- [Project Summary](#projectSummary)
- [Endpoints (for frontend usage)](#frontend)
- [Table Schema](#tableSchema)

# Deployment <a name="deployment"></a>

- [Backend Deployment](https://random-acts0519.herokuapp.com)

# Tech Stack <a name="techStack"></a>

- git - Command line tool used for version control.
- github - Webhosting site for containing repositories and supporting git commands.
- JavaScript - Language/Files used.
- Node - Shorthand for NodeJS,
- Nodemon - Used for Development: Identifies changes made to your code upon saving, and restarts the server.
- Express - Sets up your index/server, middleware, routes, and endpoints.
- Helmet - Hides your techstack in the header front end.
- Cors - allows multiple outside connections to get access via different url/ports.
- knex - Handles Migration Tables, Seeds, Creates database file through client, provides query methods for server endpoints.
- knex-cleaner - Removes data from databases before re-seeding.
- sqlite3 - Generates Local Database File.
- bcryptjs - Handles password hashing.
- dotenv - Handles environment variables.
- jsonwebtoken - Handles tokening for authentication/authorization.
- cross-env - Allows for different env variables for testing / development.
- jest - Test-runner for model and endpoint testing.
- supertest - Additional testing methods for endpoints.

# Project Summary <a name="projectSummary"></a>

We struggle to .....


# Table Schema <a name="tableSchema"></a>

### users

| Field      | Data Type | Modifiers                                   |
| ---------- | --------- | ------------------------------------------- |
| id         | integer   | PK, auto-increment                          |
| username   | string    | required, unique, limited to 255 characters |
| password   | string    | required, limited to 255 characters         |
| name       | string    | optional, limited to 255 characters         |
| email      | string    | optional, limited to 255 characters         |
| phone      | string    | optional, limited to 255 characters         |
| address    | string    | optional, limited to 500 characters         |

### contacts

| Field       | Data Type | Modifiers                                                      |
| ----------- | --------- | -------------------------------------------------------------- |
| id          | integer   | PK, auto-increment                                             |
| name        | string    | required, limited to 255 characters |
| email       | string    | optional, limited to 255 characters                            |
| phone       | string    | optional, limited to 255 characters                            |
| address     | string    | optional, limited to 500 characters                            |
| group       | string    | optional, limited to 500 characters                            |
| user_id     | integer   | required, FK of users PK, onDelete: cascade, onUpdate: cascade |

### actions

| Field          | Data Type | Modifiers                                  |
| -------------- | --------- | ------------------------------------------ |
| id             | integer   | PK, auto-increment                         |
| action         | string    | required, limited to 500 characters |
