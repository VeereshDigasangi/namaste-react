import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline); //pass same function to remove addEventListner to avoid memory leakage issue and also good to cleanup
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
