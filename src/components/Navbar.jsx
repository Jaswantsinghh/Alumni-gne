import { Link } from "react-router-dom";
import gne from "../images/gne.png";
export const Navbar = () => {
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
                <a href="/register" className="nav-link">Register</a>
            </div>
        </div>
    );
}