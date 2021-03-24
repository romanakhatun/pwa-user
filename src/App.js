import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar';
import Users from './pages/users/users';
import About from './pages/about/about';
import Camera from './pages/camera/camera';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/camera">
            <Camera />
          </Route>
          <Route path="/user">
            <Users />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
