"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (item) => {
    item.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };
    console.log(newItem);

    onAddItem(newItem);

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

  return (
    <main>
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
              type="number"
              min="1"
              max="99"
              required
              onChange={handleQuantityChange}
              value={quantity}
              className="mt-1 p-2 block w-full rounded-sm text-black bg-gray-200 focus:bg-white"
            />
          </label>

          <label className="block mb-5">
            <span className="text-black">Category:</span>
            <select
              onChange={handleCategoryChange}
              value={category}
              className="mt-1 p-2 block w-full rounded-sm text-black bg-gray-200 focus:bg-white"
            >
              <option value="produce" selected="">
                Produce
              </option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Foods</option>
              <option value="dry goods">Dry goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </label>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-sky-300 hover:bg-sky-600 rounded-md text-white"
          >
            Create Item
          </button>
        </form>
      </div>
    </main>
  );
}
