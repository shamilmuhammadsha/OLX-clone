import React, { useContext, useDeferredValue, useEffect } from "react";
import "./App.css";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Create from "./Components/Create/Create";
import ViewPost from "./Pages/ViewPost";
import Post from "./store/postContext";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import { AuthContext, FirebaseContext } from "./store/Context";

function App() {
  const { setUser } = useContext(AuthContext);
  const firebase = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/view">
            <ViewPost />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
