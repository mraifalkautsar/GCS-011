import { useState } from "react";

const Weapon = () => {
    const [laserCharge, setLaserCharge] = useState(100);
    const [missileCount, setMissileCount] = useState(10);
    const [shieldStrength] = useState(100);
    const [defenseMode, setDefenseMode] = useState("Passive");

    const fireLaser = () => {
        setLaserCharge(prev => Math.max(0, prev - 20));
    };

    const launchMissile = () => {
        setMissileCount(prev => Math.max(0, prev - 1));
    };

    const toggleDefenseMode = () => {
        setDefenseMode(prev => (prev === "Passive" ? "Active" : "Passive"));
    };

    return (
        <div>
            <h2>Weapon & Defense Systems</h2>
            
            <div>
                <h3>🔦 Laser Cannons</h3>
                <p>Charge: {laserCharge}%</p>
                <button onClick={fireLaser}>Fire Laser</button>
            </div>
            
            <div>
                <h3>🚀 Missile Launchers</h3>
                <p>Missiles Remaining: {missileCount}</p>
                <button onClick={launchMissile}>Launch Missile</button>
            </div>
            
            <div>
                <h3>🛡 Shield Strength</h3>
                <p>{shieldStrength}%</p>
            </div>
            
            <div>
                <h3>⚔ Defense Mode</h3>
                <p>{defenseMode}</p>
                <button onClick={toggleDefenseMode}>Toggle Defense Mode</button>
            </div>
        </div>
    );
};

export default Weapon;