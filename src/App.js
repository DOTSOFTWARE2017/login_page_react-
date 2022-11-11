import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./Routes/Private";
import Dashboard from "./Dashboard";

import {useState } from "react";
import { getToken } from "./Utils/Common";
function App() {

  const token = getToken();

  const [Logged] = useState(token ? true : false);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<PrivateRoute isAuth={Logged} />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
