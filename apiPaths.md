 # Endpoints (for frontend usage) <a name="frontend"></a>

Additional documentaion for the backend can be found here: https://github.com/random-kindness-generator/randomActs-BE/tree/DevEB#frontend

---
## <a name="tableofcontents"></a>
# Table Of Contents

- [Register](#register)
- [Login](#login)
- [Users](#users)
- [Contacts](#contacts)
- [Actions](#actions)

---

 ### Global CRUD Rules

- Authentication: **All** endpoints **except** api/register and api/login require a valid token to be passed in the request header.

---

 # Auth api endpoints
## <a name="register"></a>
## REGISTER API 

##### Example Data:
 ```
 registerInfo ={
    "username": "string", <-required
    "password": "string", <-required
    "name": "string",
    "phone": "string",
    "email": "string",
    "address": "string"
 }
 ```

### POST

`${URL}/api/register, 
    { `registerInfo` }`

---
## <a name="login"></a>
## LOGIN API 

##### Example Data:
```
loginInfo ={
    "username": "string",
    "password": "string"
}
```

### POST
`${URL}/api/login, 
    { `loginInfo` }`

---

---
## <a name="users"></a>
# Users api endpoints
[Table of Contents](#tableofcontents)
## CREATE USER API

##### Example Data:
```
userInfo = {
    "username": "string",
    "password": "string",
    "name": "string",
    "phone": "string",
    "email": "string",
    "address": "string"
}
```
### POST

`${URL}/api/users, 
    {`userInfo`}
    { headers: {Authorization: `token`} }`

---

## FIND ALL USERS API

### GET
`${URL}/api/users, 
    { headers: {Authorization: `token`} }`

---

## FIND USERS BY ID API

### GET
`${URL}/api/users/${`UserId`}, 
    { headers: {Authorization: `token`} }`

---

## FIND ALL CONTACTS FOR A USER 

### GET
`${URL}/api/users/${`UserId`}/contacts, 
    { headers: {Authorization: `token`} }`

---

## UPDATE USER INFORMATION

##### Example Data:
 ```
 updatedInfo = {
    "username": "string",
    "password": "string",
    "name": "string",
    "phone": "string",
    "email": "string",
    "address": "string"
}
 ```

### PUT
`${URL}/api/users/${UserId}, 
   {`updatedInfo`},
   {  headers: {Authorization: `token`} }`

---

## DELETE USER INFORMATION

### DELETE
- `${URL}/api/users/${UserId}, 
    { headers: {Authorization: `token`} }`

---
---
## <a name="contacts"></a>
# Contact api endpoints
[Table of Contents](#tableofcontents)
## CREATE A NEW CONTACT 

##### Example Data:
```
 contactInfo ={ 
	 "name": "admin2", 
	 "phone": "1234567890",
     "email": "test@email.com",
     "address": "123 street",
     "group": "friends",
     "notes": "likes beach stuff",
	 "user_id": 1
}
```

### POST
- `${URL}/api/contacts, {`contactInfo`}, 
    { headers: {Authorization: `token`} }`

---

## FIND ALL CONTACTS 

### GET
- `${URL}/api/contacts, 
{ headers: {`Authorization: token`} }`

---

## FIND CONTACT BY ID 
### GET
- `${URL}/api/contacts/${`id`}, 
    { headers: {Authorization: `token`} }`

---

## UPDATE CONTACT INFORMATION 

##### Example Data:
```
 updatedInfo =     {
        "name": "admin2",
        "phone": "1234567890",
        "email": "test@email.com",
        "address": "123 street",
        "group": "friends",
        "notes": "likes beach stuff",
        "user_id": 1
    }
```

### PUT
- `${URL}/api/contacts/${`id`}, 
    {`updatedInfo`}, 
    {  headers: {Authorization: `token`} }`
    
---

## DELETE CONTACT INFORMATION

### DELETE
- `${URL}/api/contacts/${`id`},
    {  headers: {Authorization: `token`} }`

---
---
## <a name="actions"></a>
# Action api endpoints
[Table of Contents](#tableofcontents)
## CREATE NEW ACTION

##### Example Data:
```
 actionInfo ={ 
	 "name": "admin2", 
	 "phone": "1234567890",
     "email": "test@email.com",
     "address": "123 street",
     "group": "friends",
     "notes": "likes beach stuff",
	 "user_id": 1
}
```

### POST
- `${URL}/api/actions, {`actionInfo`}, 
    { headers: {Authorization: `token`} }`

---

## FIND ALL ACTIONS 

### GET
- `${URL}/api/actions, 
    { headers: {`Authorization: token`} }`

---

## FIND ACTIONS BY ID 

### GET
- `${URL}/api/actions/${`id`}, 
    { headers: {Authorization: `token`} }`

---

## UPDATE ACTION INFORMATION

##### Example Data:
```
 updatedInfo =     {
        "name": "admin2",
        "phone": "1234567890",
        "email": "test@email.com",
        "address": "123 street",
        "group": "friends",
        "notes": "likes beach stuff",
        "user_id": 1
    }
```

### PUT
- `${URL}/api/actions/${`id`}, 
    {`updatedInfo`}, 
    {  headers: {Authorization: `token`} }`
    
---

## DELETE AN ACTION

### DELETE
- `${URL}/api/actions/${`id`},
    {  headers: {Authorization: `token`} }`