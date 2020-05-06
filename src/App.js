import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import "assets/scss/style.scss";
import LandingPages from 'pages/LandingPages';
function App() {
  return (
    <Router>
      <Route path="/" component={LandingPages}>

      </Route>
    </Router>
  );
}

export default App;
