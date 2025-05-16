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

    



    return (
        <>
            <Home cart={cart} addToCart={addToCart} emptyToCart={emptyToCart} />
        </>
    );
}

export default App;
