import React from 'react';
import GreeterFunctional from './GreeterFunctional';
import PayeesManager from './payees/PayeesManager';

function App() {
  return (
    <>
      <GreeterFunctional company="Discover Financial Services"/>
      <PayeesManager />
    </>
  );
}

export default App;
