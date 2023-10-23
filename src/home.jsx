import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="container mt-4 border p-3">
            <h2 className="text-center">Select an option</h2>
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-primary m-2 border"
                    onClick={() => navigate("/records")}
                >
                    View Patients
                </button>
                <button
                    className="btn btn-success m-2 border"
                    onClick={() => navigate("/fileupload")}
                >
                    New Patient
                </button>
            </div>
        </div>
    );
};

export default HomePage;
