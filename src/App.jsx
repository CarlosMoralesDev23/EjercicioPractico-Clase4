import "./App.css";
import Home from "./Layouts/Home.jsx";
import { useState } from "react";

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (productToCart) => {
        // setCart([...cart, productToCart])

        const isProductInCart = cart.find(
            (productInCart) => productInCart.id === productToCart.id
        );

        if (isProductInCart) {
            setCart(
                cart.map((productInCart) =>
                    productInCart.id === productToCart.id
                        ? {
                              ...productInCart,
                              quantity: productInCart.quantity + 1,
                          }
                        : productInCart
                )
            );
        } else {
            setCart([...cart, { ...productToCart, quantity: +1 }]);
        }
    };

    const decrementQuantity = (productId) => {
        console.log("Decrementando ID:", productId);

        setCart(
            cart.map((productInCart) =>
                productInCart.id === productId
                    ? {
                            ...productInCart,
                            quantity: Math.max(1, productInCart.quantity - 1)
                        }
                    : productInCart
            )
        );
    };
    const incrementQuantity = (productId) => {
        console.log("Decrementando ID:", productId);

        setCart(
            cart.map((productInCart) =>
                productInCart.id === productId
                    ? {
                            ...productInCart,
                            quantity: productInCart.quantity + 1
                        }
                    : productInCart
            )
        );
    };

    const emptyToCart = () => {
        setCart([]);
    };

    const removeProductInCart = (productId) => {
        console.log("Eliminando ID:", productId);

        const newCart = cart.filter((product) => product.id !== productId);

        setCart(newCart);
    };

    return (
        <>
            <Home
                cart={cart}
                addToCart={addToCart}
                emptyToCart={emptyToCart}
                removeProductInCart={removeProductInCart}
                decrementQuantity={decrementQuantity}
                incrementQuantity={incrementQuantity}
            />
        </>
    );
}

export default App;
