import { useState } from "react";

const PassengerList = () => {
    const [passengers, setPassengers] = useState([
        { id: 1, name: "Tali'Zorah nar Rayya", role: "Engineer" },
        { id: 2, name: "Liara T'Soni", role: "Scientist" },
        { id: 3, name: "Garrus Vakarian", role: "Sniper" }
    ]);
    const [newPassenger, setNewPassenger] = useState({ name: "", role: "" });

    const addPassenger = (e) => {
        e.preventDefault();
        if (!newPassenger.name || !newPassenger.role) return;
        const newEntry = { id: passengers.length + 1, name: newPassenger.name, role: newPassenger.role };
        setPassengers([...passengers, newEntry]);
        setNewPassenger({ name: "", role: "" });
    };

    const removePassenger = (id) => {
        setPassengers(passengers.filter(passenger => passenger.id !== id));
    };

    return (
        <div>
            <h2>Passenger List</h2>
            
            <div>
                <h3>👥 Crew & Passengers</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passengers.map(passenger => (
                            <tr key={passenger.id}>
                                <td>{passenger.name}</td>
                                <td>{passenger.role}</td>
                                <td><button onClick={() => removePassenger(passenger.id)}>Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div>
                <h3>Add New Passenger</h3>
                <form onSubmit={addPassenger}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={newPassenger.name}
                        onChange={(e) => setNewPassenger({ ...newPassenger, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Role"
                        value={newPassenger.role}
                        onChange={(e) => setNewPassenger({ ...newPassenger, role: e.target.value })}
                    />
                    <button type="submit">Add Passenger</button>
                </form>
            </div>
        </div>
    );
};

export default PassengerList;
