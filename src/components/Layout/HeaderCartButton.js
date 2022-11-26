import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const [btnHighlighted, setBtnHighlighted] = useState(false);

	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;

	const numberOfCartItems = cartCtx.items.reduce((prevNum, item) => {
		return prevNum + item.quantity;
	}, 0);

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnHighlighted(true);
		const timer = setTimeout(() => {
			setBtnHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
