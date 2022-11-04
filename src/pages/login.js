import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./pages.css";
function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState ("");

  function UserEmail(e) {
    setEmail(e.target.value);
  }
  function UserPassword(e) {
    setPassword(e.target.value);
  }

  function HandSubmit(e)
  {
      e.preventDefalut();
      alert(`Plese Enter your Email Id ${Email}` )
  }
  
  // console.log(Email);
  // console.log(Password);

  
 
  return (
    <>
      <h4 className="text-center mt-4"> Welcome to login Page🥳</h4>

      <form className="align" style={{ width: "35%" }} onSubmit={HandSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail1"
            value={Email}
            onChange={UserEmail}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            {" "}
            Never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={Password}
            placeholder="Password"
            onChange={UserPassword}
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </>
    
  );
}

export default Login;
