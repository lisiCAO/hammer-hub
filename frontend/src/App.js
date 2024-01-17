import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auctions" component={AuctionList} />
        <Route path="/auction/:id" component={Auction} />
        <Route path="/add-auction" component={AddAuction} />
      </Switch>
    </Router>
  );
}

export default App;
