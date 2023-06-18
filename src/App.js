import React from 'react';
import HomePage from './components/HomePage/HomePage'; // Update the import path for HomePage
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Lifestyle from "./components/HomePage/subsegment/Lifestyle"
import Technology from './components/HomePage/subsegment/Technology';
import Travel from './components/HomePage/subsegment/Travel';
import JobNews from './components/HomePage/job/JobNews';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/subsegment/Lifestyle" component={Lifestyle}/> 
          <Route exact path="/subsegment/Technology" component={Technology}/> 
          <Route exact path="/subsegment/Travel" component={Travel}/> 

          <Route exact path="/job/JobNews" component={JobNews}/> 
          
        </Switch>
      </Router>
  );
};

export default App;
