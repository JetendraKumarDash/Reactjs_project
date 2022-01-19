import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./home.css";
const Home = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/players");
        setUser(result.data);
    }
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4" id='container'>
                <Link className="col" to="/tdetails">
                    <div className="card">
                        <img src="./Images/csk.jpg" className="card-img-top" alt="Not Available" />
                        <div className="card-body">
                            <h5 className="card-title">CSK(Chennai Super kings)</h5>
                            <p className="card-text">The Chennai Super Kings (CSK) are a franchise cricket team based in Chennai, Tamil Nadu.</p>
                        </div>
                    </div>
                </Link>
                <Link className="col" to="/tdetails">
                    <div className="card">
                        <img src="./images/DC.jpg" className="card-img-top" alt="Not Available" />
                        <div className="card-body">
                            <h5 className="card-title">DC(Delhi Capitals)</h5>
                            <p className="card-text">The Delhi Capitals are Link franchise cricket team based out of Delhi in the Indian Premier League (IPL).</p>
                        </div>
                    </div>
                </Link>
                <Link className="col" to="/tdetails">
                    <div className="card">
                        <img src="./Images/MI.jpg" className="card-img-top" alt="Not Available" />
                        <div className="card-body">
                            <h5 className="card-title">MI(Mumbai Indians)</h5>
                            <p className="card-text">The Mumbai Indians are Link franchise cricket team based in Mumbai, Maharashtra, that competes in the Indian Premier League.</p>

                        </div>
                    </div>
                </Link>
                <Link className="col" to="/tdetails">
                    <div className="card">
                        <img src="./Images/RR.jpg" className="card-img-top" alt="Not Available" />
                        <div className="card-body">
                            <h5 className="card-title">RR(Rajasthan Royals) </h5>
                            <p className="card-text">The Rajasthan Royals (often abbreviated as RR) are Link franchise cricket team based in Jaipur, Rajasthan, that plays in the Indian Premier League (IPL).</p>

                        </div>
                    </div>
                </Link>
            </div>

        </>
    );
}
export default Home;