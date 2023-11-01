"use client";

import { useState, useEffect } from "react";


export default function MealIdeas({ ingredients }) {
    const[meals, setMeals] = useState([]);

    function loadMealIdeas() { 
        fetchMealIdeas(ingredients).then((mealData) => {
            if (mealData && mealData.meals) {
                setMeals(mealData.meals);
            }
        });
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredients]);

    return (
        <div>
            <h1>Meal ideas including {ingredients}</h1>
            <ul>
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <li key={meal.idMeal} >
                            {meal.strMeal}
                        </li>
                    ))
                ) : (
                    <p>No meals found.</p>
                )}
            </ul>
        </div>
    );
}

async function fetchMealIdeas (ingredients) {
    const response = await  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
    const mealData = await response.json();
    console.log(mealData);
    return mealData;
}