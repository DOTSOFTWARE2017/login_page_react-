import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { addEventListeners, removeEventListeners } from "./eventListenerUtil";

export const TimeoutLogic = () => {
  useEffect(() => {
    const createTimeout2 = () =>
      setTimeout(() => {
        // Implement a sign out function here
        Navigate('/')
      }, 300000);

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
