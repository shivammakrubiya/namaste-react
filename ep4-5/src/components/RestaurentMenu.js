import { useParams } from "react-router-dom";
import useRestuarentMenu from "../utils/customHooks/useRestuarentMenu";
import RestaurentCategories from "./RestaurentCategories";
import Shimmer from "./Shimmer";
import { useState } from "react";

const RestuarentMenu = () => {
    const [showIndex, setShowIndex] = useState(null)
    const { resId } = useParams()
    const resDetail = useRestuarentMenu(resId)
    if (resDetail === null) return <Shimmer />

    const categories = resDetail.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    const { name, cuisines, costForTwoMessage } = resDetail.cards[2].card.card.info

    return (
        <div className="m-5 text-center">
            <h1 className="font-bold text-lg my-4">{name}</h1>
            <h3> {cuisines.join(", ")} - {costForTwoMessage}</h3>
            {categories.map((c, index) => <RestaurentCategories key={c.card.card.title} category={c.card.card} showItems={index === showIndex} setIndex={() => setShowIndex(index)} />)}
        </div>
    )
}

export default RestuarentMenu;