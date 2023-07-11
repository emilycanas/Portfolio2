//import React from 'react'

import Home from './Home'
import Gems from './Gems'
import Carte from './Carte'
import About from './About'
import Contact from './Contact'

/*  Below is the code for lazy loading of pages*/
//const Home = React.lazy(() => import('./Home'))
// const Gems = React.lazy(() => import('./Gems'))
// const Carte = React.lazy(() => import('./Carte'))
// const About = React.lazy(() => import('./About'))
// const Contact = React.lazy(() => import('./Contact'))


const exports = {
    Home,
    Gems,
    Carte,
    About,
    Contact,  
}



export default exports