import React from "react";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Pizza",
		description: "Finest snacks in town",
		price: 10.99,
	},
	{
		id: "m2",
		name: "Schnitzel",
		description: "A german specialty!",
		price: 16.5,
	},
	{
		id: "m3",
		name: "Barbecue Burger",
		description: "American, raw, meaty",
		price: 12.99,
	},
	{
		id: "m4",
		name: "Green Bowl",
		description: "Healthy...and green...",
		price: 18.99,
	},
	{
		id: "m5",
		name: "Suya",
		description: "Healthy...and barbeque",
		price: 18.99,
	},
	{
		id: "m6",
		name: "Jellof Rice & Chicken",
		description: "Amazing combo..",
		price: 21.99,
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
	));
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
