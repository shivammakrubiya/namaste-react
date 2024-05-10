import { CDN_URL, FAKE_FOOD_IMAGE } from "../utils/constants"
const ItemCards = ({ items }) => {
    console.log("🚀 ~ ItemCards ~ items:", items)
    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <div key={item.card.info.id} className="flex justify-between border-b-2" >
                        <div className="text-left w-9/12">
                            <li key={index} className="p-2  m-2">
                                <p className="font-bold py-1">{item.card.info.name}</p>
                                <p className="font-semibold text-sm py-1">₹{item.card.info.price || item.card.info.defaultPrice / 100}</p>
                                <p className="text-sm text-gray-600-500 py-1">{item.card.info.description}</p>
                            </li>
                        </div>
                        <div className="my-5">
                            <div className="absolute">
                                <button className="bg-black text-white p-2 mx-5 mt-[75px] rounded-lg ">ADD+</button>
                            </div>
                            <img src={item.card.info.imageId ? CDN_URL + item.card.info.imageId : FAKE_FOOD_IMAGE} alt="logo" className="rounded w-[100px] h-[100px]  " ></img>
                        </div>
                    </div>
                )
            })}
        </ul>
    )
}

export default ItemCards