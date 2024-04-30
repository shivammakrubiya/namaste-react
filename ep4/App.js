import React from "react";
import ReactDOM from "react-dom";

import resData from "./data";

/**
 * App Layout
 *  - Header
 *      - Navbar
 *      - Logo
 *  - Body
 *      - Search
 *      - Cards
 *  - Footer
 *      - Links
 *      - CopyRight
 *      - Contact
 */

//* Header

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

//* Body

const RestaurentCard = ({ resData }) => {
    const { name, cloudinaryImageId, cuisines, avgRating , sla : {slaString}} = resData.info;
    return (
        <div className="res-card">
            <div className="res-details">
                <div className="res-img">
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="logo"></img>
                </div>
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating} Star</h4>
                <h4>{slaString}</h4>
            </div>
        </div>
    )
}

//* App Layout

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resData?.map(data => <RestaurentCard resData={data} />)
                }
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
