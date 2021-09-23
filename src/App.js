import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./shared/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./shared/Footer";
import Reset from "./Components/Reset";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/latest-products" component={LatestProducts} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/shop" component={Shop} />
          <Route path="/stores" component={Stores} />
          <Route path="/account" component={Account} />
          <Route path="/cart" component={Cart} /> */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/reset" component={Reset} />
      </Switch>
    </Router>
  );
}

export default App;
