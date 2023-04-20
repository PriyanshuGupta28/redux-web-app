import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store.authReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(userData);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1>Login</h1>
      {auth ? "login successfull" : "please login"}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
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
