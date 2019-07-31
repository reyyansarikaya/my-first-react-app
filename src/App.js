import React from 'react';

import './App.css';
import MyComponent from './components/MyComponent';
import MyDataComponent from './components/MyDataComponent';

function App() {
  return (
    <div className="App">
     <MyComponent name="reyyan sarıkaya" > this is my children </MyComponent>
        <MyComponent name="fatma sarıkaya" > this is my children </MyComponent>
        <MyDataComponent></MyDataComponent>
    </div>
  );
}

export default App;
