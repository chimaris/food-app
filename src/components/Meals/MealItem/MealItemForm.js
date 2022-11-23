import React, { useRef } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
	const quantityInputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		const quantity = quantityInputRef.current.value;
		props.onAddCart(+quantity);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={quantityInputRef}
				label="Qantity"
				input={{ id: "qantity_" + props.id, type: "number", min: "1", max: "5", step: "1", defaultValue: "1" }}
			/>
			<button>+ Add</button>
		</form>
	);
};

export default MealItemForm;
