import axios from 'axios';
import react from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './addplayer.css';
const Addplayer = () => {
    let history = useHistory();
    const [player, setPlayer] = useState({
        playername: "",
        team: "",
        description: "",
        isPlaying: "",
        price: ""

    });


    const InputEvent = (e) => {
        const { name, value } = e.target;
        setPlayer((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
        console.log(player);
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3003/players", player);
        history.push("/tdetails");
    }

    return (
        <>
            <div className='main-card'>
                <form action="" onSubmit={e => onSubmit(e)}>
                    <div className="c-body">
                        <h1>ADD PLAYER</h1>
                        <h5 className="title">INFORMATION ABOUT THE PLAYER</h5><br />
                        <input type="text" className="playername" placeholder='Enter the PlayerName' name="playername" value={player.playername} onChange={InputEvent} /><br />
                        <input type="text" className="team" placeholder='Enter the team name' name="team" value={player.team} onChange={InputEvent} /><br />
                        <input type="text" className="desc" placeholder='Enter the Role' name="description" value={player.description} onChange={InputEvent} /><br />
                        <input type="text" className="ps" placeholder='Enter the Playing Status' name="isPlaying" value={player.isPlaying} onChange={InputEvent} /><br />
                        <input type="text" className="price" placeholder='Enter the price' name="price" value={player.price} onChange={InputEvent} /><br />
                        <button className='added' >ADD</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Addplayer;