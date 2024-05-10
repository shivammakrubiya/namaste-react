import RestaurentCard, { isVegRestaurantCard } from "./RestaurentCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { ALL_RESTAURENTS } from "../utils/constants";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
    const [listOfRestuarants, setListOfRestuarants] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const IsVegRestaurant = isVegRestaurantCard(RestaurentCard);

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

    const { loggedInUserName, setUserName } = useContext(UserContext)
    return listOfRestuarants.length === 0 ? (<Shimmer />) : (
        <div className="mt-2">
            <div className="filter">
                <input type="text" className="border border-solid border-black py-1 mx-2" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="py-2 px-4 m-4 bg-green-100 rounded-lg"
                    onClick={() => {
                        const filtredList = listOfRestuarants.filter(data => data?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
                        setFilteredData(filtredList)
                        setSearchText("")
                    }}
                >Search</button>
                <button className="py-2 px-4 m-4 bg-green-100 rounded-lg" onClick={() => setFilteredData(listOfRestuarants.filter(data => data.info.avgRating > 4))}>
                    Top Rated Restuarants
                </button>
                <button className="py-2 px-4 m-4 bg-green-100 rounded-lg" onClick={() => setFilteredData(listOfRestuarants)}>
                    Clear Filter
                </button>
                <div className="inline-block">
                    <label>UserName : </label>
                    <input type="text" className="border-black border p-2" value={loggedInUserName} onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredData?.map(data =>
                        <Link key={data.info.id} to={"/restuarents/" + data.info.id}>
                            {
                                data?.info?.veg === true ? <IsVegRestaurant key={data.info.id} resData={data} isVeg={data.info.veg} /> : <RestaurentCard key={data.info.id} resData={data} />
                            }
                        </Link>)
                }
            </div>
            <div className="text-center">
                <button className="py-2 px-4 m-4 bg-red-500 font-bold rounded-lg text-white"
                    onClick={() => updateData()} 
                >Load More...</button>
            </div>
        </div>
    )
}

export default Body;