import "./App.css";import Home from "./Layouts/Home.jsx";
import { useState } from "react";



function App() {

    const [ cart , setCart ] = useState( [] )

    const addToCart = (productToCart)=>{
        setCart([...cart, productToCart])
    }



    return (
        <>
            <Home cart={cart} addToCart={addToCart} />
        </>
    );
}

export default App;
