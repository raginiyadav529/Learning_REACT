import { useState } from "react";
import "./Toggle.css";

function ToggleButtonFun() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="container-main">
    <div className="container">
      <button
        className={`toggle ${isOn ? "on" : "off"}`}
        onClick={() => setIsOn(!isOn)}
      >
        <span className="circle"></span>
      </button>
    </div>
    </div>
  );
}

export default ToggleButtonFun;
