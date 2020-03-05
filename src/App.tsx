import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import GreeterFunctional from './GreeterFunctional';
import PayeesManager from './payees/PayeesManager';
import ReduxCounter from './demos/ReduxCounter';
import ReduxCounterToolkit from './demos/ReduxCounterToolkit';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="section">
          <div className="container">
            <GreeterFunctional company="Discover Financial Services" />
            <div>
              <p>
                <NavLink to="/payees">Payees</NavLink> |
                <NavLink to="/people">People</NavLink> |
                <NavLink to="/redux-counter">Redux Counter</NavLink> |
                <NavLink to="/redux-counter-toolkit">
                  Redux Counter (Toolkit)
                </NavLink>
              </p>
            </div>

            <Switch>
              <Route path="/payees">
                <PayeesManager />
              </Route>
              <Route path="/people">
                <PeopleManager />
              </Route>
              <Route path="/redux-counter">
                <ReduxCounter />
              </Route>
              <Route path="/redux-counter-toolkit">
                <ReduxCounterToolkit />
              </Route>
            </Switch>
          </div>
        </section>
      </Router>
    </Provider>
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
