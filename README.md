# Project Redeem Backend.

This is the Backend of our final project for School Of Code, we were presented with the task of creating an app that would help a solve a problem. After some discussion we decided to create an Full Stack App with full CRD (our app didn't require update) funtionality that allowed users to post tutorials to help make a change to the world.

The backend is deployed [here](https://backend-soc.herokuapp.com/)

## To Run Locally:

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/final-project_back-end-boolean_pirates.git
```

Install dependencies

```bash
  npm i (or npm install)
```

Add environment variables

```bash
  full steps below
```

Start the server

```bash
  npm run dev
```


## Environment Variables

Create a copy of the .env.example file then fill in those credentials with those for your own database and rename the file .env (dont forget to makesure youre gitignore has .env in it).
## To Run the Tests:

To run tests, run the following command

```bash
  npm run test
```


## Authors
- [@Afam](https://github.com/afam-io)
- [@danielknight261](https://github.com/danielknight261)
- [@Harri](https://github.com/HairiBeast)
- [@Tass](https://github.com/tassanee-atsa)
- [@Jojok](https://github.com/JojokCreator)
- [@Musy88](https://github.com/Musy88)



## What is it?

A complete backend that uses an ExpressJS HTTP server for Node.js and is set up to makes calls to a MongoDB Atlas multi-cloud database. The server uses Mongoose an object modeling tool designed to work in an asynchronous environment to "talk" to the database.

The schema can be found in the models folder in postTutorials.js

## API Reference

#### GET ALL TUTORIALS

```http
  GET localhost:3000/tutorials
```

| Route        | Type     | Description                |
| :----------- | :------- | :------------------------- |
| `/tutorials` | `GET` | GETs all the tutorials in the database |

#### POST 

```http
  POST localhost:3000/tutorials
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/tutorials`      | `POST` | Creates a new tutorial |

#### DELETE

```http
  DELETE localhost:3000/tutorials/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/tutorials/:id`      | `DELETE` | Delete the user with the designated id |

## Authentication(work in progress)

Our backend routes are currently unprotected and there are plans to protect them using the Auth0 authentication we implemented in the front-end using JWT authentication.