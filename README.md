# BACKEND ECOM

## Table of Contents

Click the links below to jump to that section!

- [Description](#description)
- [Installation](#Installation)
- [Technologies](#Technologies)
- [Usage](#Usage)
- [Demo](#Demo)
- [Credits](#credits)
- [License](#license)

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- To build an app like shopify.
- Why did you build this project?
- I wanted to be relevant in today's ecom world and thought that this would be a good idea to implement
- What problem does it solve?
- It makes the ecommerce process just a tad bit easier.
- What did you learn?
- I learned about Ecommerce and how the items correlate to the global world

## Installation

What are the steps required to install your project?

- Run npm i to install dependencies
- link the database in the ./db/schema.sql file
- Seed your database with npm seed
- Run npm start in the terminal to start the application!
- Use insomnia to test!

## Technologies

This application is using the following dependencies:

- dotenv
- express
- mysql2
- sequelize

## Usage

Run dependencies:

```bash
npm i
```

For the database structure:

```bash
mysql -u root -p < db/schema.sql
```

For pre-populating the database:

```bash
npm run seed
```

For starting the server application:

```bash
npm start
```

**MAIN** routes:

```bash
http://localhost:3001/api/categories

http://localhost:3001/api/products

http://localhost:3001/api/tags
```

**SUB** routes:

- Display all datas from the table inside the database

```bash
/
method: GET
```

- Display a specific data, searched by id from the table inside the database

```bash
/:id
method: GET
```

- Create a new data entry

```bash
/
method: POST
```

- Update a data entry, by id

```bash
/:id
method: PUT
```

- Delete a data entry, by id

```bash
/:id
method: DELETE
```

**FOR POST AND PUT methods**, this is the JSON format as object is needed for the Insomnia Core request body to be sent to the server:

```bash
{
    "category_name": "Winter Gear"
}
main route: categories


{
    "product_name": "Basketball",
    "price": 200.00,
    "stock": 3,
    "tagIds": [1, 2, 3, 4]
}
main route: products


{
    "tag_name": "rock music"
}
main route: tags
```

## Demo

add demo

## Credits

- Arvin John Bautista
- Oliver Shih

## License

License: MIT
