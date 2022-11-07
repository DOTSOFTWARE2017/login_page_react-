import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, removeUserSession } from './Utils/Common';
import { TimeoutLogic } from './Utils/TimeoutLogic';

function Dashboard(props) {
  const user = getUser();

const navigate=useNavigate();

  const handleLogout = () => {
    removeUserSession();
    navigate('/');
  }

  return (
    <div>
      Welcome {user.name}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
      <TimeoutLogic/>
    </div>
  );
}

export default Dashboard;
