import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Tdetails.css';
const Tdetails = () => {
    const [player, setPlayer] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/players", player);
        setPlayer(result.data.reverse());
    };
    return (
        <>
            <div className='main-container'>
                <div className="card-top" >
                    <img src="./images/cskicon.jpg" className="card-img-top" alt="Not Available" />
                    <div className="card-T">
                        <label className='l1'>Team Name : </label> <span className='yellow'>Chennai Super King (CSK)</span>
                        <label className='l1'>Championship : </label> <span className='yellow'>3</span>
                    </div>
                </div>
                <br />
                <div className='container'>
                    <div className=" sub-container row row-cols-1 row-cols-md-4 g-4" >
                        <Link className="cols" to='/pdetails'>
                            {player.map((play, index) => (
                                <div className="cards" >
                                    <img src="./images/rainaicon3.jpg" className="card-img-top" alt="..." />
                                    <h2>{play.description}</h2>
                                    <div className="card-bodys">
                                        <h5 className="pname">{play.playername}</h5>
                                    </div>
                                </div>
                            ))}
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Tdetails;