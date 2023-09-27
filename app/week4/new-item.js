"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("produce");
    const [itemCreated, setItemCreated] = useState(false)

    const handleSubmit = (item) => {
        item.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);

        setItemCreated(true);

        setName("");
        setQuantity("1");
        setCategory("produce");
    };

    const handleNameChange = (item) => {
        setName(item.target.value);
    };

    const handleQuantityChange = (item) => {
        setQuantity(item.target.value);
    };

    const handleCategoryChange = (item) => {
        setCategory(item.target.value);
    };

    return(
        <main>
            <div className="min-h-screen bg-slate-800 flex items-center justify-center">
                {itemCreated && (
                    <div className="absolute top-0 mt-8 text-2xl text-blue-600">
                        Item Created
                    </div>
                )}
                <div className="w-full max-w-md bg-blue-200 p-6 rounded-lg shadow-lg">
                    <h1 className="text-2x1 text-yellow-300 font-bold mb-7">
                        Create New Item
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-5">
                            <span className="text-black">Item Name:</span>
                            <input
                                required
                                onChange={handleNameChange}
                                value={name}
                                className="mt-1 p-2 block w-full rounded-sm text-black bg-gray-200 focus:bg-white"
                            />
                        </label>

                        <label className="block mb-5">
                            <span className="text-black">Quantity:</span>
                            <input 
                             required
                             onChange={handleQuantityChange}
                             value={quantity}
                             className="mt-1 p-2 block w-full rounded-sm text-black bg-gray-200 focus:bg-white"
                            />
                        </label>

                        <label className="block mb-5">
                            <span className="text-black">Category:</span>
                            <input 
                             required
                             onChange={handleCategoryChange}
                             value={category}
                             className="mt-1 p-2 block w-full rounded-sm text-black bg-gray-200 focus:bg-white"
                            />
                        </label>

                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-sky-300 hover:bg-sky-600 rounded-md text-white"
                        >
                            Create Item
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}