import { useState } from "react";

const NavigationSystem = () => {
  const [autopilot, setAutopilot] = useState(false);
  const [speed] = useState(0);
  const [acceleration] = useState(0);
  const [fuel] = useState(80);

  const toggleAutopilot = () => {
      setAutopilot(!autopilot);
  };

  return (
      <div>
          <h2>Navigation & Flight Systems</h2>
          
          <div>
              <h3>📍 Current Location</h3>
              <p>Loading...</p>
              <h3>🎯 Destination</h3>
              <p>Unknown</p>
          </div>
          
          <div>
              <h3>🚀 Velocity & Acceleration</h3>
              <p>Speed: {speed} km/s</p>
              <p>Acceleration: {acceleration} m/s²</p>
          </div>
          
          <div>
              <h3>⛽ Fuel Levels</h3>
              <div>
                  <div style={{ width: `${fuel}%`, backgroundColor: 'green', height: '20px' }}></div>
              </div>
              <p>{fuel}%</p>
          </div>
          
          <div>
              <h3>🛠 Autopilot & Manual Controls</h3>
              <button onClick={toggleAutopilot}>
                  {autopilot ? "Disable Autopilot" : "Enable Autopilot"}
              </button>
              <p>{autopilot ? "Autopilot Engaged" : "Manual Mode"}</p>
          </div>
          
          <div>
              <h3>📡 Trajectory Map</h3>
              <div>[Map Placeholder]</div>
          </div>
      </div>
  );
};

export default NavigationSystem;