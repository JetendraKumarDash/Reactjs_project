import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './Pdetails.css';
const Pdetails = () => {
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
            <div className="card mb-3">

                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="./images/rainaicon.jpg" className="raina" alt="..." />
                    </div>
                    <div className="col-md-8">
                        {player.map((play, index) => (

                            <div className="card-body1" >
                                <h5 className="card-title" >{index + 1} INFORMATION ABOUT THE PLAYER</h5><br />
                                <label className="pname">PLAYER NAME : </label> <span>{play.playername} </span><br />
                                <label className="team">TEAM : </label> <span>{play.team} </span><br />
                                <label className="role">ROLE : </label> <span>{play.description} </span><br />
                                <label className="ps">PLAYING STATUS : </label><span>{play.isPlaying} </span><br />
                                <label className="price">PRICE : </label> <span>{play.price} </span>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </>
    );
}
export default Pdetails;