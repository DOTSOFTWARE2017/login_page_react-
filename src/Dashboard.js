import React from "react";
import { useNavigate } from "react-router-dom";
import {  removeUserSession } from "./Utils/Common";
import { TimeoutLogic } from "./Utils/TimeoutLogic";

function Dashboard(props) {


  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserSession();
    navigate("/");
  };

  return (
    <div className="container log bg-dark text-white">
      Welcome to Dashboard !<br />
      <br />
      <input
        type="button"
        className=" btn btn-primary"
        onClick={handleLogout}
        value="Logout"
      />
      <TimeoutLogic />
    </div>
  );
}

export default Dashboard;
