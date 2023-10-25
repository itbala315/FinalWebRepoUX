import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const RecordsPage = () => {
    const navigate = useNavigate();
    const [records, setRecords] = useState([]);

    const returnTohome = () => {
        // Perform logout logic (e.g., clear authentication state)
        // Redirect to the login page
        navigate("/home");
    };
    useEffect(() => {
        // Fetch records from Firestore and update the state
        const fetchData = async () => {
            const recordsCollection = collection(db, "patientDatas");
            const snapshot = await getDocs(recordsCollection);
            const recordsData = snapshot.docs.map(doc => ({ ...doc.data() }));
            setRecords(recordsData);
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    return (
        <div className="container mt-4">
        <h1 className="text-center mb-2" style={{ color: "white" }}>Records</h1>
        <div className="text-end mt-3 mb-3">
            <button className="btn btn-primary btn-lg" onClick={returnTohome}>
                Return to home
            </button>
        </div>
        <div className="row">
            {records.map((record) => (
                <div key={record.id} className="col-md-4 mb-4">
                    <div className="card">
                    <div className="card-header bg-light text-left text-black fw-bold ">{record.patientName}</div>
                        <div className="card-body">
                            <p className="card-text">
                                {JSON.stringify(record.data?.message?.split("\n")[0]).replace(/^"(.*)"$/, "$1")}
                            </p>
                            <p className="card-text">
                                {JSON.stringify(record.data?.message?.split("\n")[1]).replace(/^"(.*)"$/, "$1")}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
       
    </div>
    );
};

export default RecordsPage;
