import React from "react";
import Product from "./Product";
import { products } from "../Utils/data";

import "../Styles/ListProducts.css"

const ListProducts = ({ addToCart }) => {

    return (
        <div className="containProducts">
            {products.map((productInStore) => (
                <Product
                    key={productInStore.id}
                    productInStore={productInStore}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
};

export default ListProducts;
