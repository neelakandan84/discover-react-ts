import React from 'react';
import GreeterFunctional from './GreeterClass';
import PayeesManager from './payees/PayeesManager';

function App() {
  return (
    <section className="section">
    <div className="container">

      <GreeterFunctional company="Discover Financial Services"/>

      <PayeesManager />
      </div>
      </section>
  );
}

export default App;
