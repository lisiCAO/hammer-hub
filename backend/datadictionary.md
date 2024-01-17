# Data Dictionary - Hammer-Hub Auctions

## Database Table: `auctions`

### 1. Table Structure

| Field Name       | Data Type        | Constraints        | Description                                   |
|------------------|------------------|--------------------|-----------------------------------------------|
| id               | INT              | Primary Key, Auto-Increment | Unique identifier for each auction          |
| sellerEmail      | VARCHAR(320)     | Not Null           | Email address of the seller                  |
| itemName         | VARCHAR(100)     | Not Null           | Name of the auction item                     |
| itemDescription  | VARCHAR(10000)   | Not Null           | Description of the auction item              |
| lastPrice        | DECIMAL(10, 2)   | Not Null, Non-negative | Current highest bid price                 |
| lastBidderEmail  | VARCHAR(320)     | Nullable           | Email address of the current highest bidder  |

### 2. Relationship Diagram

For the current scope of the `auctions` table, there are no direct relationships with other tables. However, in a more expanded schema, relationships might include:

- **users** table (if implemented): Linking `sellerEmail` and `lastBidderEmail` with the user's email in the `users` table.
- **bids** table (for detailed bid history): Linking each bid with the `auctions` table via `auctionId`.

### 3. SQL Creation Statement

```sql
CREATE TABLE auctions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sellerEmail VARCHAR(320) NOT NULL,
    itemName VARCHAR(100) NOT NULL,
    itemDescription VARCHAR(10000) NOT NULL,
    lastPrice DECIMAL(10, 2) NOT NULL CHECK (lastPrice >= 0),
    lastBidderEmail VARCHAR(320) NULL
);
```
