import React from 'react';

interface GreeterClassProps {
  company: string;
}

class GreeterClass extends React.Component<GreeterClassProps> {

  render() {
    return (
      <section>
        <h1 className="is-size-3 has-text-weight-bold">Greetings from {this.props.company} (GreeterClass)</h1>
      </section>
    )
  }
}

export default GreeterClass;