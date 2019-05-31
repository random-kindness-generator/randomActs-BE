User api endpoints
NOTE: Username and password are required; name, phone, email, and address are optional fields
1) POST `${URL}/api/users`, `{
    "username": "",
    "password": ""
}`

 2) GET `${URL}/api/users`, `{
    headers: {'Authorization': token}
}`

 3) GET `${URL}/api/users/${UserId}`, `{
    headers: {`Authorization`: token}
}`

 4) GET `${URL}/api/users/${UserId}/contacts`, `{
    headers: {`Authorization`: token}
}`

 5) UPDATE `${URL}/api/users/${UserId}`, `{
    updated info = {
        "username": "",
        "password": "",
        "name": "",
        "phone": "",
        "email": "",
        "address": ""
    }
}
6) DELETE `${URL}/api/users/${UserId}`, `{
    headers: {`Authorization`: token}
}`

 Contact api endpoints
1) POST `${URL}/api/register`, `{ 
	 "username": "", 
	 "password": ""
}`

 1) POST `${URL}/api/login`, `{ 
	 "username": "", 
	 "password": ""
}`

 Contact api endpoints

 contactInfo ={ 
	 "name": "admin2", 
	 "phone": "1234567890",
     "email": "test@email.com",
     "address": "123 street",
     "group": "friends",
     "notes": "likes beach stuff",
	 "user_id": 1
}

 1) POST `${URL}/api/contacts`, '{contactInfo}', `{
        headers: {'Authorization': token}
      }`
2) GET `${URL}/api/contacts`, `{
        headers: {'Authorization': token}
      }`
3) GET `${URL}/api/contacts/${id}`, `{
        headers: {'Authorization': token}
      }`

 updatedInfo =     {
        "name": "admin2",
        "phone": "1234567890",
        "email": "test@email.com",
        "address": "123 street",
        "group": "friends",
        "notes": "likes beach stuff",
        "user_id": 1
    }

 4) PUT `${URL}/api/contacts/${id}`, '{updatedInfo}', `{
        headers: {'Authorization': token}
      }`
5) DELETE `${URL}/api/contacts/${id}`