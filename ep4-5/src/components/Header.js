


import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            <div className="login-section">
                <button onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}>{btnName}</button>
            </div>
        </div>
    )
}

export default Header;