import React from "react";
import "../Styles/Product.css"

const Product = ( { productInStore, addToCart  } ) => {


    return (
        <div className="product">
            <h3>{productInStore.name}</h3>
            <img src={productInStore.image} alt={productInStore.name} />
            <span>{productInStore.description}</span>
            <p>{productInStore.price}</p>
            <button onClick={()=>addToCart(productInStore)}>Agregar</button>
        </div>
    );
};

export default Product;