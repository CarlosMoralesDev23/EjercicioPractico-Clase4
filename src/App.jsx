import "./App.css";import Home from "./Layouts/Home.jsx";
import { useState } from "react";



function App() {

    const [ cart , setCart ] = useState( [] )

    const addToCart = (productToCart)=>{
        setCart([...cart, productToCart])
    }

    const emptyToCart = ()=>{
        setCart([])
    }

    const removeProductInCart = (productId)=>{
        console.log("Eliminando ID:", productId);

        const newCart = cart.filter((product)=> product.id !== productId)

        setCart(newCart)
    }

    

    



    return (
        <>
            <Home
                cart={cart}
                addToCart={addToCart}
                emptyToCart={emptyToCart}
                removeProductInCart={removeProductInCart}
            />
        </>
    );
}

export default App;
