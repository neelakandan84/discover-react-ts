import React from 'react';

interface GreeterFunctionalProps {
  company: string;
}

// const GreeterFunctional = (props: GreeterFunctionalProps) => {
const GreeterFunctional = ({ company }: GreeterFunctionalProps) => {
  // const { company } = props;

  return (
    <div style={{borderBottom: '3px black solid'}}>
      <h1 className="is-size-2">Greetings from {company}</h1>
    </div>
  );
};

export default GreeterFunctional;
