import React from 'react';
import {Router, Switch, Route } from 'react-router-dom';
import HomePage from './homepage';
import About from './about';
import Contact from './contact';
import Project from './project';
import Resume from './resume';

const main =() => (
    <Router>
   
        <Route  path="/" component = {HomePage}/>
        <Route  path="/" component = {About}/>
        <Route  path="/" component = {Contact}/>
        <Route  path="/" component = {Project}/>
        <Route  path="/" component = {Resume}/>

    </Router>
)
export default main;