import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authReducer.js/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store.authReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      mobile_no: email,
      password,
    };
    dispatch(login(userData));
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1>Login</h1>
      <h1>{auth ? "login successfull" : "please login"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          // type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">log in</button>
      </form>
    </div>
  );
};

export default Login;
