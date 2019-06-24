import './App.css';
import React from 'react'

const App = () => {

  // API KEY & ID
  const APP_ID = '4b179fdc';
  const APP_KEY = 'ac0b5b9e6eb1f6acce1265b4f9f69f0b';

  // get request NOT WORKING 
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
  <div className='App'>
    <h1>Recipe App</h1>
    <form className='search-form'>
      <input className='search-bar' type='text'></input>
      <button className='search-button' type='submit'>Search</button>
    </form>
  </div>
  );
}
export default App;

