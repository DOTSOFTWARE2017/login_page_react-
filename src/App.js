import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          
          <div className="content">
            <Routes>
              <Route  path="/home" element={<Home/>} />
              <Route path="/" element={<Login/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
          </div>
        </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
