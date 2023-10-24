import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="card text-center">
        <div className="card-header bg-light text-black">
          <h2 className="fw-bold">Select an option</h2>
        </div>
        <div className="card-body">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              className="btn btn-secondary m-2"
              onClick={() => navigate("/fileupload")}
            >
              New Patient
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => navigate("/records")}
            >
              View Patients
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
