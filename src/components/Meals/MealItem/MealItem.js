import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
	const price = `$${props.price.toFixed(2)}`;

	const cartCtx = useContext(CartContext);

	const addToCartHandler = (quantity) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			description: props.description,
			price: props.price,
			quantity: quantity,
		});
	};

	return (
		<li className={classes.meal} key={props.id}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} onAddCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
