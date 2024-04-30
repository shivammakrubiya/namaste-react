import RestaurentCard from "./RestaurentCard";
import resData from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    const [listOfRestuarants, setListOfRestuarants] = useState(resData);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => setListOfRestuarants(listOfRestuarants.filter(data => data.info.avgRating > 4))}>
                    Top Rated Restuarants
                </button>
                <button className="filter-btn" onClick={() => setListOfRestuarants(resData)}>
                    Clear Filter
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestuarants?.map(data => <RestaurentCard resData={data} />)
                }
            </div>
        </div>
    )
}

export default Body;