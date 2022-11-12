import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addEventListeners, removeEventListeners } from "./eventListenerUtil";




export const TimeoutLogic = () => {
  const navigate=useNavigate();
  useEffect(() => {
    const createTimeout2 = () =>
      setTimeout(() => {
        // Implement a sign out function here
        navigate('/')
      }, 30000);

    const listener = () => {
      clearTimeout(timeout);
      timeout = createTimeout2();
    };

    // Initialization
    let timeout = createTimeout2();
    addEventListeners(listener);

    // Cleanup
    return () => {
      removeEventListeners(listener);
      clearTimeout(timeout);
    };
  }, []);
};
