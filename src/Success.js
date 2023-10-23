import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData?.message;
  const messageParts = formData?.split("\n");
  const returnTohome = () => {
    // Perform logout logic (e.g., clear authentication state)
    // Redirect to the login page
    navigate("/home");
  };
  return (
    <div className="container mt-4">
      <div className="text-end mt-3 mb-3">
        <button className="btn btn-primary" onClick={returnTohome}>
          Return to home
        </button>
      </div>
      <h2 className="text-center mb-2">Form Submitted Successfully!</h2>
      {formData && (
        <div className="mx-auto mt-2" style={{ maxWidth: "500px" }}>
          <div className="card">
            <div className="card-body text-center mt-2">
              <p className="card-text">{messageParts[0]}</p>
              <p className="card-text" style={{ fontSize: "15px" }}>
                {messageParts[1]}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Success;
