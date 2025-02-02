import { useState } from "react";

const CargoInventory = () => {
    const [cargo, setCargo] = useState([
        { id: 1, name: "Oxygen Tanks", quantity: 10 },
        { id: 2, name: "Food Supplies", quantity: 20 },
        { id: 3, name: "Spare Parts", quantity: 5 }
    ]);
    const [capacity] = useState(100);
    const [newItem, setNewItem] = useState({ name: "", quantity: "" });

    const addItem = (e) => {
        e.preventDefault();
        if (!newItem.name || !newItem.quantity) return;
        const newCargoItem = { id: cargo.length + 1, name: newItem.name, quantity: parseInt(newItem.quantity) };
        setCargo([...cargo, newCargoItem]);
        setNewItem({ name: "", quantity: "" });
    };

    const removeItem = (id) => {
        setCargo(cargo.filter(item => item.id !== id));
    };

    return (
        <div>
            <h2>Cargo & Inventory</h2>
            
            <div>
                <h3>🚛 Cargo Hold</h3>
                <p>Capacity: {capacity} units</p>
            </div>
            
            <div>
                <h3>📋 Inventory</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cargo.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div>
                <h3>Add New Item</h3>
                <form onSubmit={addItem}>
                    <input
                        type="text"
                        placeholder="Item Name"
                        value={newItem.name}
                        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Quantity"
                        value={newItem.quantity}
                        onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                    />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default CargoInventory;
