import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const firebase=useContext(FirebaseContext)
  const history =useHistory()
  const handleLogin=(event)=>{
    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      // alert("logged in")
      history.push("/")
    }).catch((error)=>{
      alert(error.message)

    })

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(event)=>{
              setEmail(event.target.value)
            }}
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}}
            
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
