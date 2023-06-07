import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Pages from './pages'

function App() {
  return (
    <>
   
    <Routes>   
      <Route
        exact path = '/'
        name = 'Home'
        element = {<Pages.Home/>}
      ></Route>
       <Route
        exact path = '/gems'
        name = 'Gems'
        element = {<Pages.Gems/>}
      ></Route>
      <Route
        exact path = '/carte'
        name = 'Carte'
        element = {<Pages.Carte/>}
      ></Route>
    </Routes>
    </>
  );
}

export default App;
