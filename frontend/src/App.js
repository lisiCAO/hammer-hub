import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuctionsList from './components/views/AuctionsList';
import BidOnAuction from './components/views/BidOnAuction';
import AddAuction from './components/views/AddAuction';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/auctions" element={<AuctionsList />} />
        <Route path="/auction/:id" element={<BidOnAuction />} />
        <Route path="/add-auction" element={<AddAuction />} />
      </Routes>
    </Router>
  );
}

export default App;
