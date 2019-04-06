import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import './App.css';

import Login from './Login/login';
import Register from './Register/register';
import Jokes from './Jokes/jokes';

class App extends Component {
  render() {
    return (
      <>
<h1 className="logo"> <NavLink to="/">Jamar's dad joke app</NavLink></h1>
      <header>
        <nav>
          <NavLink to="/register">Register</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp; | &nbsp;
          <NavLink exact to="/jokes">Dad Jokes</NavLink>
          &nbsp; | &nbsp;
          <button onClick={this.logout}>Logout</button>
        </nav>
      </header>
      <main>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login} />
        <Route path="/jokes" component={Jokes} />
      </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };
}

export default App;
