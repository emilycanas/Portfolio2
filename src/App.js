import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Pages from './pages'

function App() {
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);
  
  return (
    <>
    <div className='progress'></div>
   
    <Routes>   
      <Route
        exact path = '/'
        name = 'Home'
        element = { 
          <React.Suspense fallback = 'Loading...'><Pages.Home/></React.Suspense>
        }
      ></Route>
       <Route
        exact path = '/gems'
        name = 'Gems'
        element = {
          <React.Suspense fallback = 'Loading...'><Pages.Gems/></React.Suspense>
        }
      ></Route>
      <Route
        exact path = '/carte'
        name = 'Carte'
        element = {
        <React.Suspense fallback = 'Loading...'><Pages.Carte/></React.Suspense>

      }
      ></Route>
      <Route
        exact path = '/about'
        name = 'About'
        element = {
        <React.Suspense fallback = 'Loading...'><Pages.About/></React.Suspense>

      }
      ></Route>
        <Route
        exact path = '/contact'
        name = 'Contace'
        element = {
          <React.Suspense fallback = 'Loading...'><Pages.Contact/></React.Suspense>
        }
      ></Route>
    </Routes>
    </>
  );
}

export default App;
