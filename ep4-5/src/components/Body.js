import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
    const [listOfRestuarants, setListOfRestuarants] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");

    //* Called usee effect 
    useEffect(() => {
        fetchData()
    }, [])

    //* Fetch Data from API
    const fetchData = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2315453&lng=72.8662668&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await res.json();
        setListOfRestuarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    //* Append More Data
    const updateData = async () => {
        try {

        } catch (error) {
            console.log("Error in updateData", error);
            alert("Something went wrong")
        }
    }
    return listOfRestuarants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="search-btn"
                    onClick={() => {
                        const filtredList = listOfRestuarants.filter(data => data?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
                        setFilteredData(filtredList)
                        setSearchText("")
                    }}
                >Search</button>
                <button className="filter-btn" onClick={() => setFilteredData(listOfRestuarants.filter(data => data.info.avgRating > 4))}>
                    Top Rated Restuarants
                </button>
                <button className="filter-btn" onClick={() => setFilteredData(listOfRestuarants)}>
                    Clear Filter
                </button>
            </div>
            <div className="res-container">
                {
                    filteredData?.map(data => <Link key={data.info.id} to={"/restuarents/" + data.info.id}><RestaurentCard key={data.info.id} resData={data} /></Link>)
                }
            </div>
            <div className="load-more-data">
                <button className="load-more-btn"
                    onClick={() => updateData()}
                >Load More...</button>
            </div>
        </div>
    )
}

export default Body;