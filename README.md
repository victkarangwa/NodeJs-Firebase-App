# NodeJs with Firebase Realtime Database
 This project demonstrates the implementation  of #CRUD operation with #Firebase under NodeJs app

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

   * Node JS
   * Postman (For testing api locally)
   * Firebase project setup

#### Creating an Firebase application
1. If you haven't already, create a Firebase project: In the Firebase console, click Add project, then follow the on-screen instructions to create a Firebase project or to add Firebase services to an existing GCP project.

2. Navigate to the Database section of the Firebase console. You'll be prompted to select an existing Firebase project. Follow the database creation workflow.

3. Select a starting mode for your Firebase Security Rules

4. Click Done.

#### Get service account key file

1. In the Firebase console, open Settings > Service Accounts.

2. Click Generate New Private Key, then confirm by clicking Generate Key.

3. Securely store the JSON file containing the key.

*NOTE*: 
1. In my project the service account file is `server/service-account-file.json`
2. Firebase configurations are under `server/services/Firebase.js`

### Running endpoints

###### CREATE

Method: `POST`
URL: `http://localhost:3000/api/auth/createAccount`
Body:
```js 
{
    firstName: String,
    lastName: String,
    email: String,
    password: String,
}
```
###### READ

Method: `POST`
URL: `http://localhost:3000/api/auth/login`
Body: 
```js 
{
    email: String,
    password: String,
}
```

###### UPDATE

Method: `PUT`
URL: `http://localhost:3000/api/auth/update/{id}`
Body: 
```js 
{
    firstName: String,
    lastName: String,
    email: String(optiona),
    password: String,
}
```

###### DELETE
Method: `DELETE`
URL: `http://localhost:3000/api/auth/remove/{id}`

## Author

[Victor KARANGWA](https://github.com/victorkarangwa4/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENCE.md) file for details

