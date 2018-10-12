import React, { Component } from 'react';

import {Provider} from 'react-redux'
import store from './store'

import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <div className="App">
       <NavBar></NavBar>
        <Home></Home>
        <Login></Login>
      </div>
      </Provider>

    );
  }
}

export default App;
