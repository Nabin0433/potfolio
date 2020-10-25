import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './page';
import About from './about';
import Contact from './contact';
import Cv from './cv';
import Project from './projects';

const Main = () => {
    return(
 <Switch>

   <Route exact path ="/" component = {LandingPage} />
   <Route path ="/About" component = {About} />
   <Route path ="/Contact" component = {Contact} />
   <Route path ="/Cv" component = {Cv} />
   <Route path ="/Projects" component = {Project} />
 
 </Switch>
     
    );
}

export default Main;
