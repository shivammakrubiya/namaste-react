import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { ALL_RESTAURENTS } from "../utils/constants";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
const Body = () => {
    const [listOfRestuarants, setListOfRestuarants] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    //* Called usee effect 
    useEffect(() => {
        fetchData()
    }, [])

    //* Fetch Data from API
    const fetchData = async () => {
        const res = await fetch(ALL_RESTAURENTS)
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
    if (!onlineStatus) return (<h1>You're lost your connection !!, Please check your internet connection.</h1>)


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