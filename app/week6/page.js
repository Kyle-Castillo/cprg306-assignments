"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page(){
    const [items, setItems] = useState(
        itemsData.map((item) => ({
            ...item
        })));

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };
    return (
        <main>
            <h1 className="text-4xl font-bold m-5 text-center text-yellow-500">
                Week 6
            </h1>
                <NewItem
                    onAddItem={handleAddItem} 
                />
            <ItemList items={items}/>
        </main>
    );
}
