import React from 'react';
import ReactDOM from 'react-dom';


function MyComponent(props) {
  return <h1>{props.name}</h1>;
}

function App() {
  return (
    <div>
      <MyComponent name="Hello, world" />
      <MyComponent name="Hello, world111" />
      <MyComponent name="Hello, world222" />
    </div>
  );
}


export default App;