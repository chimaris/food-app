import meal from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>Foodie</h1>
				<HeaderCartButton onClick={props.getCartHandler} />
			</header>
			<div className={classes["main-image"]}>
				<img src={meal} alt="meal" />
			</div>
		</>
	);
};

export default Header;
