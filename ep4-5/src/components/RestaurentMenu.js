import { useEffect, useState } from "react";
import { RESTAURENT_DETAIL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestuarentMenu = () => {
    const [resDetail, setResDetail] = useState(null)
    const { resId } = useParams()
    useEffect(() => {
        fetchMenu()
    }, [])


    //* Fetches details of the restuarent
    const fetchMenu = async () => {
        const res = await fetch(RESTAURENT_DETAIL + resId);
        const json = await res.json();

        setResDetail(json.data)
    }
    if (resDetail === null) return <Shimmer />

    const { itemCards } = resDetail.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    const { name, cuisines, costForTwoMessage } = resDetail.cards[2].card.card.info

    return (
        <div className="res-menu">
            <h1>{name}</h1>
            <h3> {cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map(item => <li>{item.card.info.name} - {item.card.info.price / 100}</li>)}
            </ul>
        </div>
    )
}

export default RestuarentMenu;