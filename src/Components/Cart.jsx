import React from "react";
import "../Styles/Cart.css"; 


const Cart = ({ cart }) => {
    return (
        <div className="cart-container">
            <h2>Cart</h2>
            {cart.map((productInCart) => (
                <div key={productInCart.id} className="cart-item">
                    <h5>{productInCart.name}</h5>
                    <div>
                        <button>-</button>
                        <span>Cantidad</span>
                        <button>+</button>
                    </div>
                    <span>SubTotal : </span>
                    <button>Eliminar</button>
                </div>
            ))}
            <h2 className="cart-total">Total</h2>
        </div>
    );
};

export default Cart;
