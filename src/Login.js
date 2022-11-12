import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "./Utils/Common";
import { useNavigate } from "react-router-dom";
import "./pages.css";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post("https://2689-103-141-51-42.in.ngrok.io/api/v1/login", {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token,response.data.refreshtoken)
        navigate("/dashboard");

        alert("sucessfully login");
      })
      .catch((error) => {
        setLoading(false);
        if (error) {
          alert("Invalid Data");
        }
      });
  };

  return (
    <div className="bg-dark login text-white shadow-lg hover rounded">
      Login
      <br />
      <br />
      <div>
        Username
        <br />
        <input
          type="text"
          className="in"
          {...email}
          autoComplete="new-password"
        />
      </div>
      <div style={{ marginTop: 10 }}>
        Password
        <br />
        <input
          type="password"
          className="in"
          {...password}
          autoComplete="new-password"
        />
      </div>
      {error && (
        <>
          <small style={{ color: "red" }}>{error}</small>
          <br />
        </>
      )}
      <br />
      <input
        type="button"
        className="btn btn-primary btn-larger"
        value={loading ? "Loading..." : "Login"}
        onClick={handleLogin}
        disabled={loading}
      />
      <br />
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
