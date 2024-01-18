import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AuctionsList from './components/views/AuctionsList';
import BidOnAuction from './components/views/BidOnAuction';
import AddAuction from './components/views/AddAuction';
import Welcome from './Welcome';

const router = createBrowserRouter ([
  {
    path:"/",
    element: <Welcome />,
  },
  {
    path:"/auctions",
    element:<AuctionsList />,
  },
  {
    path: "/auction/:id", 
    element: <BidOnAuction />,
  },
  {
    path:"/add-auction",
    element:<AddAuction />,
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
