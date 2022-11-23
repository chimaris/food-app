import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
	const [isCartOn, setIsCartOn] = useState(false);

	const getCartHandler = () => {
		setIsCartOn(true);
	};
	const closeCartHandler = () => {
		setIsCartOn(false);
	};
	return (
		<CartProvider>
			{isCartOn && <Cart closeCartHandler={closeCartHandler} />}
			<Header getCartHandler={getCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
