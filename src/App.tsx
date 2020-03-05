import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import GreeterFunctional from './GreeterFunctional';
import PayeesManager from './payees/PayeesManager';

function App() {
  return (
    <Router>
      <section className="section">
        <div className="container">
          <GreeterFunctional company="Discover Financial Services" />
          <div>
            <p>
              <NavLink to="/payees">Payees</NavLink> | <NavLink to="/people">People</NavLink>
            </p>
          </div>

          <Switch>
            <Route path="/payees">
              <PayeesManager />
            </Route>
            <Route path="/people">
              <PeopleManager />
            </Route>
          </Switch>
        </div>
      </section>
    </Router>
  );
}

const PeopleManager = () => {
  return (
    <div>
      <h2 className="is-size-3">People Manager</h2>
    </div>
  );
};

export default App;
