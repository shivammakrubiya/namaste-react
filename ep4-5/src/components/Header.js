


import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/grocery"}>Grocery</Link></li>
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