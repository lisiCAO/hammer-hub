Building a web application with a Node.js/Express backend and a React frontend, which will interact with each other through RESTful APIs. The application is an auction system with basic CRUD functionalities. Here are requirements and outline a plan for both the server and client-side implementations.

### Server (Node.js/Express with MySQL)

#### Database Setup: `auctionsdb`
- **Table**: `auctions`
  - `id INT PK AI` (Primary Key, Auto-Increment)
  - `sellerEmail VARCHAR(320)` (required, validate email format)
  - `itemName VARCHAR(100)` (required, validate character range and allowed symbols)
  - `itemDescription VARCHAR(10000)` (required, support for rich text if advanced)
  - `lastPrice DECIMAL` (required, non-negative)
  - `lastBidderEmail VARCHAR(320)` (nullable)

#### RESTful API Design
1. **GET `/api/auctions`**
   - Retrieve all auction records.
   - Response: Array of auction records.

2. **POST `/api/auctions`**
   - Create a new auction record.
   - Request: Auction data (without `id`).
   - Response: ID of the newly created record or some confirmation.

3. **PATCH `/api/auctions/:id`**
   - Update an existing auction record (primarily for bidding).
   - Request: New bid data.
   - Response: Confirmation (e.g., "true").

#### Additional Features
- **Data Validation**: Ensure data consistency and validation on the server side.
- **Error Handling**: Properly handle errors and return appropriate HTTP status codes.

### Client (React)

#### Key Views/Routes
1. **List of Auctions**
   - Display auctions in an HTML table.
   - Include a link/button for bidding on each auction.

2. **Bid on an Auction**
   - Form to submit a new bid.
   - Display auction details.
   - Validate that the new bid is higher than the last price.
   - Error handling for invalid bids.

3. **Add an Auction**
   - Form to submit a new auction.
   - Validate inputs as per database constraints.
   - Confirmation upon successful submission.

#### Implementation Notes
- **React Router**: Use React Router for managing navigation and routes.
- **State Management**: Manage state appropriately for forms and data display.
- **CSS**: Basic styling for a visually appealing layout.

#### Helpful Resources
- For handling routes in React, you can refer to the [React Router documentation](https://reactrouter.com/).
- For examples and tutorials, websites like [DelftStack](https://www.delftstack.com/howto/react/react-router-params/) can be helpful.

### General Development Tips
- **Start with the Backend**: Get your API up and running first. Test it using tools like Postman or Insomnia.
- **Frontend Development**: Once your backend API is stable, start building the React frontend. Begin with basic functionalities and then move on to more complex features.
- **Iterative Testing**: Continuously test both the backend and frontend as you add new features.
- **Version Control**: Use Git for version control to manage your codebase effectively.
