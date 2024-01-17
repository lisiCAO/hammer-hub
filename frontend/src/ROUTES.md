# Frontend Routing Documentation for Auction Website

## Overview

This document outlines the frontend routing setup for the Auction Website, built using React. The routing is managed using `react-router-dom`.

## Routes

### 1. Welcome Route

- **Path:** `/`
- **Component:** `Welcome`
- **Description:** This is the landing page of the website. It provides an introduction or welcome message to the users.

### 2. Auctions List Route

- **Path:** `/auctions`
- **Component:** `AuctionsList`
- **Description:** This route displays a list of all the auctions available on the website. Users can browse through different auctions here.

### 3. Bid on Auction Route

- **Path:** `/auction/:id`
- **Component:** `BidOnAuction`
- **Description:** This route is used for bidding on a specific auction. The `:id` in the path represents the unique identifier for an auction.

### 4. Add Auction Route

- **Path:** `/add-auction`
- **Component:** `AddAuction`
- **Description:** This route allows users to add a new auction. It contains the form and necessary interface for listing a new item for auction.

## Additional Details

- The routing is set up using `createBrowserRouter` from `react-router-dom`.
- Each route is associated with a specific component that renders the corresponding view.
