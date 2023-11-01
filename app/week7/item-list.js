"use client";

import React, { useState } from "react";
import Items from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    items = items.sort((a,b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    })
    

   const handleSortByChange = (newSortPreference) => {
    setSortBy(newSortPreference);
   }

   return (
    <div>
        <div>
            <h3>
                Sort By:
            </h3>
            <button
                onClick={() => handleSortByChange("name")}
                className={`px-4 py-2 ${sortBy === "name" ? "bg-blue-400" : "bg-blue-200"} active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300`}
            >
                Name
            </button> 
            <button
                onClick={() => handleSortByChange("category")}
                className={`px-4 py-2 ${sortBy === "name" ? "bg-blue-200" : "bg-blue-400"} active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300`}
            >
              Category  
            </button> 
        </div>
        <div>
            {items.map((items) => (
                <Items 
                    items={items} 
                    key={items.id}
                    onSelect={() => onItemSelect(items.name)} />
            ))}
        </div>
 
    </div>
   );
}

