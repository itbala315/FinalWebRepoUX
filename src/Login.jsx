import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authInstance = getAuth();

    try {
      await signInWithEmailAndPassword(authInstance, email, password);
      console.log("User logged in successfully!");
      navigate("/home"); // Redirect to dashboard after successful login
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="text-left" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="text-left" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    required
                  />
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary btn-lg col-4">
                    Login
                  </button>
                </div>
              </form>
              <p className="mt-3 text-center">
                Don't have an account?{" "}
                <button
                  className="btn btn-link p-0 "
                  onClick={() => navigate("/register")}
                >
                  Register here.
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
