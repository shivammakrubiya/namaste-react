import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";


const RestaurentCard = ({ resData }) => {
    const { id, name, cloudinaryImageId, cuisines, avgRating, sla: { slaString } } = resData.info;
    return (
        <div className="res-card" >
            <div className="res-details">
                <div className="res-img">
                    <img src={`${CDN_URL}${cloudinaryImageId}`} alt="logo"></img>
                </div>
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating} Star</h4>
                <h4>{slaString}</h4>
            </div>
        </div>
    )
}

export default RestaurentCard;
