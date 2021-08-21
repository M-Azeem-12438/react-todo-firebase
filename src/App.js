import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import {Route,Switch} from 'react-router-dom';
import Todo from './components/Todo';
import Login from './components/Login';
import Signup from './components/Signup';
import React,{useState,useEffect} from 'react';
 import {auth } from './firebase' ;
function App() {
  const [user,setUser]=useState(null)
useEffect(() => {
  const unsubscribe=auth.onAuthStateChanged(user=>{
    if (user) setUser(user)

    else
    setUser(null)
  })
  return()=>{
    unsubscribe()
  }
  
}, [])
  return (
    <BrowserRouter >
    <NavBar user={user}/>
     <Switch>
       <Route exact path="/">
         <Todo user={user}/>
       </Route>
       <Route path="/Login">
         <Login/>
       </Route>
       <Route path="/Signup">
         <Signup/>
       </Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
    

 

