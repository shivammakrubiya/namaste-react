import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/store/cartSlice";


const Cart = () => {
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(clearCart())
    }
    return (
        <div>
            
            <h1 className="text-center font-bold text-2xl m-4 p-4">Cart</h1>
            {
                items.length > 0 && <div className="w-6/12 m-auto text-end">
                <button className="bg-black text-center text-white p-2 m-auto rounded-lg " onClick={handleClick}>Clear Cart</button>
            </div>
            }
            <div className="m-auto w-6/12">
                {
                    items.length === 0 && <p className="text-center font-semibold text-xl m-4 p-4">Cart is Empty</p>
                }
                <ItemCards items={items} />
            </div>
        </div>
    )
}

export default Cart;