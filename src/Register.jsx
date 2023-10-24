import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authInstance = getAuth();

    try {
      await createUserWithEmailAndPassword(authInstance, email, password);
      console.log("User registered successfully!");
      navigate("/fileupload"); // Redirect to dashboard after successful registration
    } catch (error) {
      console.error("Registration failed:", error.message);
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
          <div
              class="card-header text-center bg-light text-black"
            >
             <h2 className="fw-bold">Register</h2>
             </div>
            <div className="card-body">
              <form className="register-form" onSubmit={handleSubmit}>
                <div className="mb-3">
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
                <div className="mb-3">
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
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg col-4"
                  >
                    Register
                  </button>
                </div>
              </form>
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <button
                  className="btn btn-link p-0"
                  onClick={() => navigate("/login")}
                >
                  Login here.
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
