# Auction System Backend

## Overview

This is the backend application for an auction system, developed using Node.js and Express and connected to a MySQL database through Sequelize. It features a RESTful API to handle CRUD operations for auction records. The backend is designed for a full-stack web application and showcase skills in web development.

## Features

- **Sequelize ORM Integration**: Utilizes Sequelize for object-relational mapping, simplifying database interactions.
- **RESTful API Endpoints**: Supports creating, retrieving, updating, and deleting auction records.
- **Data Validation**: Ensures data integrity and validation on server side.
- **Error Handling**: Provides clear error messages and appropriate HTTP status codes.

## Getting Started

### Prerequisites

- Node.js
- MySQL
- NPM (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/lisiCAO/hammer-hub.git]
   ```
2. Navigate to the project directory and install dependencies:
   ```bash
   cd [backend]
   npm install
   ```
3. Set up the MySQL database using Sequelize migrations and seeders:
   - Run `npx sequelize db:migrate` to execute the migration files.
   - Run `npx sequelize db:seed:all` to populate the database with initial data.

### Configuration

- The application uses a `config` directory for Sequelize configurations.
- Configuration for different environments (development, test, production) is defined in `config/config.json`.
- Example configuration for development:
  ```json
  {
    "development": {
      "username": "user",
      "password": "password",
      "database": "hammerdb",
      "host": "db",
      "dialect": "mysql"
    },
    // other environments...
  }
  ```

### Running the Server

Start the server with:

```bash
npm start
```

## API Reference

### Auction Endpoints

1. **POST `/api/auctions`**: Creates a new auction.
2. **GET `/api/auctions`**: Retrieves all auctions.
3. **GET `/api/auctions/:id`**: Retrieves a single auction by ID.
4. **PATCH `/api/auctions/:id`**: Updates an auction.
5. **PUT `/api/auctions/:id`**: Replaces an auction.
6. **DELETE `/api/auctions/:id`**: Deletes an auction.

## Models

### Auction Model

- Defined using Sequelize, representing the `auctions` table.
- Fields include `id`, `sellerEmail`, `itemName`, `itemDescription`, `lastPrice`, and `lastBidderEmail`.

## Data Validation

- Data validation is performed using Sequelize's model validation features.
- For example, `lastPrice` has a validation rule to ensure it's non-negative.

## Error Handling

- Errors are caught and handled, returning appropriate status codes and messages to the client.

## Testing

- The API can be tested using tools like Postman or Insomnia.
- Ensure the database is properly set up before testing.

## Contributing

Contributions are welcome to enhance the application's functionality or address bugs. Please follow the standard fork-and-pull request workflow.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- Project Link: [https://github.com/lisiCAO/hammer-hub.git]

---

> Note: This README serves as a showcase for web development skills. It is not intended for production use.