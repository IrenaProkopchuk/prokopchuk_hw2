import React from 'react';

function MyComponent(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

function Welcome() {
  return (
    <>
      <h1>
        Welcome
      </h1>
      <p>
        12345
      </p>
    </>
  );
}


export default Welcome;