# Inventinator

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#description">Description</a>
      <ul>
        <li><a href="#api">API Endpoints</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Description

An inventory management application built with NodeJs and Express on the backend and React on the frontend. It is a CRUD application that makes use of a RESTful API.

Visit the Netlify hosted app here: **[Inventinator](https://inventinator.netlify.app/)**

The Heroku hosted API can be found here: **[Inventinator API](https://inventinator-api.herokuapp.com/api/inventory)**

### Built With

- [NodeJS](https://nodejs.org/en/)
- [Express.js](https://expressjs.com//)
- [React.js](https://reactjs.org/)
- [Material UI](https://mui.com/)

## API

### Inventories


**FIND BY ID**:

`GET /api/inventory/find/:id`

Response:

```json
{
  "_id": "61e75edf3b068de8390d15ee",
  "title": "Ballgown",
  "quantity": 23,
  "tags": ["wearables", " women"],
  "price": 400,
  "status": true,
  "createdAt": "2022-01-19T00:44:15.157Z",
  "updatedAt": "2022-01-19T00:44:15.157Z",
  "__v": 0
}
```

**GET ALL**:

`GET /api/inventory/`

Sample Response:

```json
[
  {
    "_id": "61e6e32ad1c1443c7127c6a9",
    "title": "Shoes",
    "quantity": 50,
    "tags": ["wearables", " men"],
    "price": 200,
    "status": false,
    "createdAt": "2022-01-18T15:56:26.958Z",
    "updatedAt": "2022-01-18T20:54:48.209Z",
    "__v": 0
  },
  {
    "_id": "61e75edf3b068de8390d15ee",
    "title": "Ballgown",
    "quantity": 23,
    "tags": ["wearables", " women"],
    "price": 400,
    "status": true,
    "createdAt": "2022-01-19T00:44:15.157Z",
    "updatedAt": "2022-01-19T00:44:15.157Z",
    "__v": 0
  }
]
```

**CREATE**:

`POST /api/inventory`

Response:

```json
  {
    "_id": "61e75edf3b068de8390d15ee",
    "title": "Ballgown",
    "quantity": 23,
    "tags": ["wearables", " women"],
    "price": 400,
    "status": true,
    "createdAt": "2022-01-19T00:44:15.157Z",
    "updatedAt": "2022-01-19T00:44:15.157Z",
    "__v": 0
  }
```

**UPDATE**:

`PUT /api/inventory/:id`

Body:

```json
  {
    "_id": "61e75edf3b068de8390d15ee",
    "title": "Ballgown",
    "quantity": 23,
    "tags": ["wearables", " women"],
    "price": 400,
    "status": true,
    "createdAt": "2022-01-19T00:44:15.157Z",
    "updatedAt": "2022-01-19T00:44:15.157Z",
    "__v": 0
  }
```

**DELETE**

`DELETE /api/inventory/:id`

Response:

```json
"Item successfully deleted"
```

**EXPORT ALL TO CSV**:

`GET /api/inventory/export`


## Features

- Create inventory items
- Edit
- Delete
- View
- Export to CSV
- Filter them by Tags

### Prerequisites

1. Install and use the correct version of Node using [nvm](https://github.com/nvm-sh/nvm). This app was both built and hosted using node v16.13.1

   ```sh
   nvm install
   ```

1. You'll also need to create an account and set up a database with MongoDB:
   `https://docs.mongodb.com/manual/tutorial/getting-started/`
   Note: I've provided mine in the `.env.example` file inside the server folder for now.

### Installation

Clone the repo

```sh
git clone https://github.com/zakwarsame/inventinator.git
```

On the **client folder**:

1. Install npm packages
   ```sh
   npm install
   ```
1. Follow the `.env.example` by setting up a `.env` file. Use your MongoDB Connect URL here.

1. Start the server
   ```sh
   npm start
   ```

On the **server folder**:

1. Install npm packages
   ```sh
   npm install
   ```
1. Follow the `.env.example` by setting up a `.env` file

1. Start the server
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Dependencies

- react
- axios
- material-ui
- dotenv
- json2csv
- mongoose
- nodemon
- express
- cors

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Zak Warsame - [@Zak_py](https://twitter.com/Zak_py) - zakwarsame@gmail.com

Inventinator: [https://github.com/zakwarsame/inventinator](https://github.com/zakwarsame/inventinator)

<p align="right">(<a href="#top">back to top</a>)</p>
