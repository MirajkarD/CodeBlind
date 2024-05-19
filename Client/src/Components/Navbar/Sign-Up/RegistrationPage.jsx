import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/register", { name, email, password })

      .then((result) => {
        console.log(result);
        navigate("/signin");
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="signup-container bg-dark text-white p-4 mt-5 mx-auto"
      style={{ maxWidth: "400px", zIndex: "1" }}
    >
      <h2 className="mb-4 fs-4 mt-3">Create your personal account</h2>
      {/* Added margin-top to h5 */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
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
            className="form-control"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkbox"
            required
          />
          <label className="form-check-label" htmlFor="checkbox">
            I agree to all statements in{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </a>
          </label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-3 px-5">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
