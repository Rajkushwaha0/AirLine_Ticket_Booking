# Airline Ticket Booking

- codebase structure
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
