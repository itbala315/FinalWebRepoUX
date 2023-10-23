import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // Import the Firestore instance
import API_BASE_URL from "./config"; // Import the API base URL from config.js

const FileUpload = () => {
    const navigate = useNavigate();
    const [fileNames, setFileNames] = useState([]);
    const [textInput, setTextInput] = useState("");

    const handleTextChange = event => {
        setTextInput(event.target.value);
    };

    const handleFileChange = (event, index) => {
        const files = event.target.files;
        const allowedExtensions = [
            ['.mat'],
            ['.hea'],
            ['.txt']
        ];
        const currentFile = files[0];
        const isValidExtension = allowedExtensions[index].some(ext => currentFile.name.toLowerCase().endsWith(ext));

        //validation for the extension
        if (!isValidExtension) {
            if (index === 0) {
                alert("First file must have .mat extension.");
            } else if (index === 1) {
                alert("Second file must have .hea extension.");
            } else if (index === 2) {
                alert("Third file must have .txt extension.");
            }
            return;
        }

        // Extract file names from the File object and update the state
        const names = Array.from(files).map(file => file.name);
        setFileNames(prevFileNames => [...prevFileNames, ...names]);
    };



    const handleSubmit = () => {
        // Handle file submission logic (e.g., send files to server)
        console.log("Files submitted:", fileNames);
        console.log("Text input:", textInput);

        const formData = new FormData();
        fileNames.forEach((fileName, index) => {
            formData.append(`file${index + 1}`, fileName);
        });

        // Make a POST request to the Flask server
        fetch(`${API_BASE_URL}/upload`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log("Response from server:", data);
                console.log(db)
                try {
                    const docRef = addDoc(collection(db, "patientDatas"), {
                        data, patientName: textInput, timestamp: new Date()
                    });
                    // Navigate to a new screen and pass docRef as a parameter
                    navigate("/success", { state: { formData: data } });

                } catch (e) {
                    console.error("Error adding document: ", e);
                }

                // Handle the server response here
            })
            .catch(error => {
                console.error('Error sending data to server:', error);
                // Handle errors here
            });
    };

    return (
        <div className="container mt-4 mb-3">
            <div className="text-center">
                <h2>Enter information</h2>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <div className="mb-3 row">
                        <label className="form-label fw-bold col-3">Patient name:</label>
                        <div className="col-8">
                            <input
                                type="text"
                                className="form-control"
                                value={textInput}
                                onChange={handleTextChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label fw-bold col-3">File 1 (.mat):</label>
                        <div className="col-8">
                            <input
                                type="file"
                                className="form-control"
                                onChange={(e) => handleFileChange(e, 0)}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label fw-bold col-3">File 2 (.hea):</label>
                        <div className="col-8">
                            <input
                                type="file"
                                className="form-control"
                                onChange={(e) => handleFileChange(e, 1)}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label fw-bold col-3">File 3 (.txt):</label>
                        <div className="col-8">
                            <input
                                type="file"
                                className="form-control"
                                onChange={(e) => handleFileChange(e, 2)}
                            />
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <button
                            className="btn btn-primary btn-lg col-4"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
