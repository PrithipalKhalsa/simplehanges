import React from 'react';

import Options from './Pages/Options';
import Timer from './Pages/Timer';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (

    <Router>
    <Route path="/simplehanges" exact component={Options} />
    <Route path="/Timer" component={Timer}/>
  </Router>
  );
}

export default App;
