import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./Routes/Private";
import Dashboard from './Dashboard'
import {  useEffect, useState } from "react";
import { getToken as token } from "./Utils/Common";
function App() {

  
  const [Logged,setLogged]=useState(false)

  useEffect(()=>{
  
    if(token)
    {
      setLogged(true)
    }

  },[])
  
    
 
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={(<PrivateRoute isAuth={Logged}  />)}>
                
                <Route path="/dashboard" element={(<Dashboard/> )}/>

                 </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
