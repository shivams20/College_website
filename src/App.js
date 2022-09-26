import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from './component/Navbarcomp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
 return (
   <>
   <BrowserRouter>
   <Navbarcomp/>
   </BrowserRouter>
    
   </>
 )
}


export default App;
