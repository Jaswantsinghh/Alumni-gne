import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gne from "../images/gne.png";
import { useStoreState } from "easy-peasy";
export const Navbar = () => {

    const [user, setUser] = useState("");
    
    useEffect(() => {
        if (!user?.token) {
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    }, [])

    const onLogOut = () => {
        localStorage.removeItem("user");
        setUser("");
    }
    return (
        <div className="navbar">
            <div className="logos">
                <img className="gne-logo" src={gne}></img>
                <div className="logo">GNDEC Alumni Website</div>
            </div>
            <div className="links">
                <a href="/home" className="nav-link">Home</a>
                <a href="/branches" className="nav-link">Branches</a>
                <a className="nav-link">About</a>
                <a className="nav-link">Contact</a>
                <a href={user?.token ? "/profile" : "/login"} className="nav-link">{ user?.token ? "Profile" : "Login" }</a>
                {user?.token && (
                    <a className="nav-link" onClick={onLogOut}>Log Out</a>
                )}
            </div>
        </div>
    );
}