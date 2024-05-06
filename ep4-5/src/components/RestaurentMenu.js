import { useParams } from "react-router-dom";
import useRestuarentMenu from "../utils/customHooks/useRestuarentMenu";
import Shimmer from "./Shimmer";

const RestuarentMenu = () => {

    const { resId } = useParams()
    const resDetail = useRestuarentMenu(resId)
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