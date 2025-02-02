import { useState } from "react";

const Status = () => {
    const [hullIntegrity] = useState(100);
    const [shieldStatus] = useState(100);
    const [powerCore] = useState(95);
    const [lifeSupport] = useState("Operational");
    const [temperature] = useState(22);
    const [oxygenLevel] = useState(98);

    return (
        <div>
            <h2>Ship Status & Systems Monitoring</h2>
            
            <div>
                <h3>🛡 Hull Integrity</h3>
                <p>{hullIntegrity}%</p>
            </div>
            
            <div>
                <h3>🔰 Shield Status</h3>
                <p>{shieldStatus}%</p>
            </div>
            
            <div>
                <h3>⚡ Power Core</h3>
                <p>{powerCore}%</p>
            </div>
            
            <div>
                <h3>🌬 Life Support</h3>
                <p>{lifeSupport}</p>
            </div>
            
            <div>
                <h3>🌡 Temperature</h3>
                <p>{temperature}°C</p>
            </div>
            
            <div>
                <h3>🫁 Oxygen Level</h3>
                <p>{oxygenLevel}%</p>
            </div>
        </div>
    );
};

export default Status;
