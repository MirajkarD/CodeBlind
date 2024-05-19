import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/login", { email, password })

      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="signin-container bg-dark text-white px-4 p-3 mt-5 mx-auto"
      style={{ maxWidth: "400px", marginLeft: "50px", marginRight: "20px" }} // Added margin left and right
    >
      <h2 className="mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control me-2"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/forget-password" className="forgot-password">
            Forgot password?
          </Link>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-3 px-4">
            Login
          </button>
        </div>
      </form>
      <footer className="mt-3 text-center">
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
      </footer>
    </div>
  );
}
