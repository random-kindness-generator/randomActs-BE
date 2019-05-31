# randomActs-BE

##Table Of Contents

- [Deployment](#deployment)
- [Tech Stack](#techStack)
- [Project Summary](#projectSummary)
- [Endpoints (for frontend usage)](#frontend)
  - [api/register](#registerEndpoint)
  - [api/login](#loginEndpoint)
  - [api/users](#usersEndpoints)
  - [api/contacts](#contactsEndpoints)
  - [api/actions](#actionsEndpoints)
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

# Endpoints (for frontend usage) <a name="frontend"></a>

### Global CRUD Rules

- Authentication: **All** endpoints **except** api/auth/register and api/auth/login require a valid token to be passed in the request header.

---

# api/authentication <a name="authEndpoints"></a>
##### (for Register and Login)


---

#### POST `api/register`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string, up to 64 characters
password: string, up to 64 characters

##### Example Request:

```
Header: default
URL Params: none
Body:
{
    "username": "nicecheck6",
    "password": "$2a$10$lCXGz79FPjlQzXNO3G3Q7elRGu.5ok6pWiEcA2PWPNJbiXHsSYstu",
    "name": "null",
    "phone": "null",
    "email": "null",
    "address": "null"
}
```

##### Example Response:

```
{
    "id": 8,
    "username": "nicecheck6",
    "password": "$2a$10$lCXGz79FPjlQzXNO3G3Q7elRGu.5ok6pWiEcA2PWPNJbiXHsSYstu",
    "name": "null",
    "phone": "null",
    "email": "null",
    "address": "null"
}
```
---

#### POST `api/login`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string
password: string

##### Example Request:

```
Header: default
URL Params: none
Body:
{
    username: 'niceguy',
    password: 'password'
}
```

##### Example Response:

```
{
    "message": "Welcome niceguy!",
    "userId": 1,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
---

# api/users <a name="usersEndpoints"></a>

#### GET `api/users/`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**: none

##### Example Request:

```
Header: default
URL Params: none
Body: none

```

##### Example Response:

```
[
    {
        "id": 1,
        "username": "niceguy",
        "password": "$2a$10$BeUlzgN.uJacLsBNQIfyv.ED7FyFAaT0IRQSDMzW8LB7Us0qJAfUS",
        "name": "Mr. Nice Guy",
        "phone": "1234567890",
        "email": "test@email.com",
        "address": "123 Nice Drive"
    },
    {
        "id": 2,
        "username": "nicegal",
        "password": "$2a$10$BeUlzgN.uJacLsBNQIfyv.ED7FyFAaT0IRQSDMzW8LB7Us0qJAfUS",
        "name": "Mr. Nice Gal",
        "phone": "1234567890",
        "email": "test@email.com",
        "address": "123 Nice Drive"
    }
]

```
---

#### GET `api/users/:id`

##### Required (unless marked optional):

**Header**: default
**URL Params**: id,integer
**Body**: none

##### Example Request:

```
Header: default
URL Params: 1
Body: none

```

##### Example Response:

```
{
    "id": 1,
    "username": "niceguy",
    "password": "$2a$10$BeUlzgN.uJacLsBNQIfyv.ED7FyFAaT0IRQSDMzW8LB7Us0qJAfUS",
    "name": "Mr. Nice Guy",
    "phone": "1234567890",
    "email": "test@email.com",
    "address": "123 Nice Drive"
}

```
---

#### PUT `api/`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string
password: string

##### Example Request:

```
Header: default
URL Params: 1
Body:
{
        "id": 1,
        "username": "niceguy7",
        "password": "password",
        "name": "Mr. Nice Guy",
        "phone": "1234567890",
        "email": "test@email.com",
        "address": "123 Nice Drive"
    }

```

##### Example Response:

```
{
    "message": "1 user(s) updated"
}

```
---

#### DELETE `api/users`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**: none

##### Example Request:

```
Header: default
URL Params: 1
Body: none

```

##### Example Response:

```
{
    "message": "user has been deleted"
}

```
---

# api/contacts <a name="contactsEndpoints"></a>

#### POST `api/`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string
password: string

##### Example Request:

```


```

##### Example Response:

```


```
---

#### POST `api/`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string
password: string

##### Example Request:

```


```

##### Example Response:

```


```
---

#### POST `api/`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string
password: string

##### Example Request:

```


```

##### Example Response:

```


```
---

#### POST `api/`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string
password: string

##### Example Request:

```


```

##### Example Response:

```


```
---

# api/actions <a name="actionsEndpoints"></a>

#### POST `api/`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string
password: string

##### Example Request:

```


```

##### Example Response:

```


```
---

#### POST `api/`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string
password: string

##### Example Request:

```


```

##### Example Response:

```


```
---

#### POST `api/`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string
password: string

##### Example Request:

```


```

##### Example Response:

```


```
---

#### POST `api/`

##### Required (unless marked optional):

**Header**: default
**URL Params**: none
**Body**:
username: string
password: string

##### Example Request:

```


```

##### Example Response:

```


```
---

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
