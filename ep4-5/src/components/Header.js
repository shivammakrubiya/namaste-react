


import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector(state => state.cart.items)
    console.log("🚀 ~ Header ~ cartItems:", cartItems)

    //* Accessing the UserContext
    const { loggedInUserName } = useContext(UserContext)
    return (
        <div className="flex justify-between items-center bg-pink-200 shadow-lg">
            <div className="w-24">
                <img src={LOGO_URL} alt="logo"></img>
            </div>
            <div className="flex">
                <ul className="flex">
                    <li className="p-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="p-4"><Link to={"/"}>Home</Link></li>
                    <li className="p-4"><Link to={"/about"}>About</Link></li>
                    <li className="p-4"><Link to={"/contact"}>Contact</Link></li>
                    <li className="p-4"><Link to={"/grocery"}>Grocery</Link></li>
                    <li className="p-4 font-bold"><Link to={"/cart"}>Cart - {cartItems.length} Items</Link></li>
                    <li><button className="p-4" onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}>{btnName}</button></li>
                    <li className="p-4 font-bold">{loggedInUserName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;