import { useEffect, useState } from "react"
import { RESTAURENT_DETAIL } from "../constants";

const useRestuarentMenu = (resId) => {
    const [resDetail, setResDetail] = useState(null);

    useEffect(() => {
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const res = await fetch(RESTAURENT_DETAIL + resId)
        const json = await res.json();
        setResDetail(json?.data)
    }
    return resDetail;
}

export default useRestuarentMenu;