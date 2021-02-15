import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me/Me.js';
import Projects from './Projects/Projects.js';
import Work from './Work/Work.js';
import Education from './Education/Education.js';


const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Me user={user} />
        </Route>
        <Route path="/projects">
          <Projects user={user} />
        </Route>
        <Route path="/work">
          <Work user={user} />
        </Route>
        <Route path="/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;