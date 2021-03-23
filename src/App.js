// import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Users from './pages/users/users';
import About from './pages/about/about';
// import firebase from './firebase';

function App() {
  // useEffect(() => {
  //   const msg = firebase.messaging();
  //   msg.requestPermission().then(() => {
  //     return msg.getToken();
  //   }).then((data) => {
  //     console.warn("token", data)
  //   })
  // })
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
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
