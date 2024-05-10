import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurentCard = ({ resData }) => {
    const { id, name, cloudinaryImageId, cuisines, avgRating, sla: { slaString }, } = resData.info;

    //* Accessing the UserContext
    const { loggedInUserName } = useContext(UserContext)
    return (
        <div className="p-4 m-4 w-[320px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <div className="res-img">
                <img src={`${CDN_URL}${cloudinaryImageId}`} alt="logo" className="rounded w-[300px] h-[275px]" ></img>
            </div>
            <h3 className="my-2 font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{slaString}</h4>
            <div>{loggedInUserName}</div>
        </div>
    )
}

export const isVegRestaurantCard = (RestaurentCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute py-2 px-4 m-2 bg-green-700 text-white rounded-lg">{props.isVeg ? "Veg" : "Non-Veg"}</label>
                <RestaurentCard {...props} />
            </div>
        )
    }
}

export default RestaurentCard;
