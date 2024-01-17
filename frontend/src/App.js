import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuctionsList from './components/views/AuctionsList';
import BidOnAuction from './components/views/BidOnAuction';
import AddAuction from './components/views/AddAuction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auctions" component={AuctionsList} />
        <Route path="/auction/:id" component={BidOnAuction} />
        <Route path="/add-auction" component={AddAuction} />
      </Routes>
    </Router>
  );
}

export default App;
