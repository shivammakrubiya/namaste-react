import ItemCards from "./ItemCards"

const RestaurentCategories = ({ category, showItems, setIndex }) => {
    return (
        <div className="p-6  bg-gray-50 w-6/12 mx-auto my-4 shadow-md cursor-pointer" onClick={() => setIndex()} >
            <div className="flex justify-between" >
                <span className="font-bold text-md">{category.title}</span>
                <span>⬇️</span>
            </div>
            {
                showItems && <ItemCards key={category.title} items={category?.itemCards} />
            }
        </div>
    )
}

export default RestaurentCategories