import React from 'react'

const Home = React.lazy(() => import('./Home'))
const Gems = React.lazy(() => import('./Gems'))
const Carte = React.lazy(() => import('./Carte'))
const About = React.lazy(() => import('./About'))
const Contact = React.lazy(() => import('./Contact'))


const exports = {
    Home,
    Gems,
    Carte,
    About,
    Contact,  
}

export default exports