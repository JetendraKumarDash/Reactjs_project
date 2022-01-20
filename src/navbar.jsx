import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <>
            <nav className="navbar ">
                <div className="container-fluid">
                    <li className="navbar-brand" >IPL</li>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <div className=" buttons d-grid  d-md-flex justify-content-md-end">
                            <button className="btn btn-primary me-md-2" type="button">ADD TEAM</button>
                            <Link className="btn btn-primary" type="button" to="/addplayer" >ADD PLAYER</Link>
                        </div>
                    </form>
                </div>
            </nav>
            <br />

        </>
    )
}
export default Nav;