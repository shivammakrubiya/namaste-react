import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            return setOnlineStatus(true)
        };
        const handleOffline = () => {
            return setOnlineStatus(false)
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

    }, [])

    return onlineStatus;
}

export default useOnlineStatus;