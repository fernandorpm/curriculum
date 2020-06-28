import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyles.css';
import Navbar from './routes/pages/Navbar';
import Index from './routes/pages/Index';
import Profile from './routes/pages/Profile';
import Projects from './routes/pages/Projects';
import Accomplishments from './routes/pages/Accomplishments';
import Education from './routes/pages/Education';
//import NotFound from './routes/pages/NotFound';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <>
    <BrowserRouter>
    <Navbar />

      <Switch>
        <Route path="/" exact={true} component={Index} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Accomplishments" component={Accomplishments} />
        <Route path="/Education" component={Education} />

        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </BrowserRouter >
  </>,
  document.getElementById('root')
);

