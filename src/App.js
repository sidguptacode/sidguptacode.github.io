import React from 'react';
import HomePage from './Components/Homepage/Homepage'
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Research from "./Components/Research/Research"
import Information from "./Components/Research/Information"
import Courses from "./Components/Courses"
import MLHealth from "./Components/MLHealth"

import ReactGA from "react-ga4";
ReactGA.initialize("G-HN2VX7KG13");

function App () {
  return (
    <HashRouter>
      <Switch>
        <main>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/projects' component={Research}/>
          <Route exact path='/courses' component={Courses}/>
        </main>
      </Switch>
    </HashRouter>
  );
}

export default App;
