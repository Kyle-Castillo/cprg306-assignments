"use client";


import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };
    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1F9A0}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{1FAB0}-\u{1FABF}\u{2B50}\u{E0020}-\u{E007F}]+/gu, '').replace(/,.*$/, '');

        setSelectedItemName(cleanedItemName);
    };
    
    return (
        <main>
            <h1 className="text-4xl font-bold m-5 text-center text-yellow-500">
                Week 7
            </h1>
            <div className="flex">
            <div className="w-1/2">
                <NewItem
                    onAddItem={handleAddItem} 
                />
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
                <div className="w-1/2">
                    <MealIdeas ingredients={selectedItemName}/>
                </div>
            </div>
        </main>
    );
}
