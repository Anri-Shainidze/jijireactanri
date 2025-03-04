import "./App.css";
import photoo from "../src/assets/temp.png";
import Infor from "./information/Infor";
import Logopedi from "./components/Logopedi";
import Eye from "./components/Eye";
import { useState } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <div className="rame-card">
        <div className="photosss">
          <img
            className="bluree-photo"
            src={photoo}
            style={{ width: "98%", borderRadius: "11px" }}
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
          />
         <Eye isVisible={isHovered}/>
        </div>
        <div className="mokvaskouri">
          <Infor />
          <hr/>
          <Logopedi />
        </div>
      </div>
    </>
  );
}

export default App;

