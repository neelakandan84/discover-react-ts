import React from 'react';

interface GreeterFunctionalProps {
  company: string;
}

// const GreeterFunctional = (props: GreeterFunctionalProps) => {
const GreeterFunctional = ({ company }: GreeterFunctionalProps) => {
  // const { company } = props;

  return (
    <section>
      <h1>Greetings from {company}</h1>
    </section>
  );
};

export default GreeterFunctional;
