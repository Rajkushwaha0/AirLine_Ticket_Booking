# Airline Ticket Booking

## codebase structure

- src/
  - index.js
  - models/
  - controllers/
  - middlewares/
  - services/
  - utils/
  - config/
- tests

## Project Setup

- clone the project on your local
- Execute `npm install` on the same path of your root directory
- Create `.env` file and add following environmnet variable
  - PORT = 3000
- Inside `src/congif` folder create a new file config.json

```
{
  "development": {
    "username": <username>,
    "password": <password>,
    "database": "Flight_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- once you have added your db config as listed above, go the src folder from terminal and execute `npm sequelize db:create`
- For tables you have to do only `npx sequelize db:migrate` in src directory as Models and Migration are present with the schemas of table.

## DB Design(Tables)

- Flight
- Airplane
- Airport
- City

- Association of tables

  - A flight belongs to an airplane but one airplane can be used for multiple flights
  - A city has many airports but one airport belongs to a city
  - A airport can have many flights but a flight belongs to single airport

## Tables

### City -> id,name,createdAt,updatedAt

### Airport -> id,name,address,city_id,createdAt,updatedAt
