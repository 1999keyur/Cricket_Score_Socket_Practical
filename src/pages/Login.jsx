import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "../redux/slices/authentication/authenticationSlice";
import { defaultPassword, defaultUsername } from "../assets/constants";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const errorMessage = useSelector((state) => state.auth.errorMessage);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === defaultUsername && password === defaultPassword) {
      dispatch(loginSuccess());
      navigate("/dashboard");
    } else {
      dispatch(loginFailure());
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
