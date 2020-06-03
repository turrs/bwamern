import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPages from "pages/LandingPages";
import Example from "pages/Example";
import Example2 from "pages/Example2";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import About from "pages/About";
import Travel from "pages/Travel";
function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPages}></Route>
      <Route path="/example" component={Example}></Route>
      <Route path="/example2" component={Example2}></Route>
      <Route exact path="/properties/:id" component={DetailsPage}></Route>
      <Route path="/checkout" component={Checkout}></Route>\
      <Route path="/about" component={About}></Route>
      <Route path="/travel" component={Travel}></Route>
    </Router>
  );
}

export default App;
