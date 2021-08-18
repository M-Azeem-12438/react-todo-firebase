import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import {Route,Switch} from 'react-router-dom';
import Todo from './components/Todo';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <BrowserRouter >
    <NavBar/>
     <Switch>
       <Route exact path="/">
         <Todo/>
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
    

 

