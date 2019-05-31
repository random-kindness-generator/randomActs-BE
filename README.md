# randomActs-BE
## <a name="tableofcontents"></a>
# Table Of Contents

- [Deployment](#deployment)
- [Tech Stack](#techStack)
- [Project Summary](#projectSummary)
- [Endpoints (for frontend usage)](#frontend)
- [Table Schema](#tableSchema)

## <a name="deployment"></a>
# Deployment 

- [Backend Deployment](https://random-acts0519.herokuapp.com)

## <a name="techStack"></a>
# Tech Stack 
[Table of Contents](#tableofcontents)

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

## <a name="projectSummary"></a>
# Project Summary 
[Table of Contents](#tableofcontents)

We struggle to .....

## <a name="frontend"></a>
 # Endpoints (for frontend usage) 
 are located in the apiPaths.md file:
https://github.com/random-kindness-generator/randomActs-BE/blob/DevEB/apiPaths.md

## <a name="tableSchema"></a>
# Table Schema 
[Table of Contents](#tableofcontents)

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
