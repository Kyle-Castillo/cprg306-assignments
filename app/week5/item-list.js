"use client";

import { useState } from "react";
import Items from "./item";
import itemsData from "./items.json"

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    let items = itemsData.map((item) => ({
        ...item}));
    

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
                style={{backgroundColor: sortBy === "name" ? "lightblue" : "lightyellow"}}
            >
                Name
            </button> 
            <button
                onClick={() => handleSortByChange("category")}
                style={{ backgroundColor: sortBy === "category" ? "lightgrey" : "lightyellow"}}
            >
              Category  
            </button> 
        </div>

        <ul>
            {items
            .sort((a,b) => {
                if (sortBy === "name") {
                    return a.name.localeCompare(b.name);
                } else if (sortBy === "category") {
                    return a.category.localeCompare(b.category);
                }
            })
            .map(item => (
                <Items items key={item.id} item={item} />
            ))
            }
        </ul>
    </div>
   );
}

