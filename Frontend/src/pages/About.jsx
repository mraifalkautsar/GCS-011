import { useState } from "react";
import shipImage from '../assets/SSV_Normandy.webp';


const About = () => {
    const [ship] = useState({
        name: "SSV Normandy",
        model: "Deep Scout Frigate",
        manufacturer: "Systems Alliance and Turian Hierarchy",
        yearBuilt: "2183",
        description: "The SSV Normandy SR-1 (Systems Alliance Space Vehicle Normandy Stealth Reconnaissance-1) was a Systems Alliance starship. She is a prototype deep scout frigate, first of the eponymous Normandy class, co-developed by the Alliance and the Turian Hierarchy with the sponsorship of the Citadel Council. She is optimized for solo reconnaissance missions deep within unstable regions, using state-of-the-art stealth technology powered by an experimental drive core. Commissioned in 2183, the Normandy was initially commanded by an Alliance officer named Elli Zander. After Zander came into conflict with turian chief engineer Octavio Tatum over the limits of the ship's drive core, Zander was removed and David Anderson placed in command. Shortly thereafter, the Normandy was handed over to Commander Shepard when the Commander became the first human Spectre, and served as Shepard's main source of transportation and base of operations."
    });

    return (
        <div>
            <h2>Ship Information</h2>
            
            <div>
                <h3>{ship.name}</h3>
                <p><strong>Model:</strong> {ship.model}</p>
                <p><strong>Manufacturer:</strong> {ship.manufacturer}</p>
                <p><strong>Year Built:</strong> {ship.yearBuilt}</p>
                <p><strong>Description:</strong> {ship.description}</p>
            </div>
            
            <div>
                <h3>📷 Ship Image</h3>
                <img src={shipImage} alt="Normandy"></img>
            </div>
        </div>
    );
};

export default About;
