import React from "react";
import "../Styles/Cart.css";

const Cart = ({
    cart,
    emptyToCart,
    removeProductInCart,
    decrementQuantity,
    incrementQuantity,
}) => {
    return (
        <div className="cart-container">
            <h2>Cart</h2>

            {cart.length === 0 && <p>No hay productos agregados</p>}

            {cart.map((productInCart) => (
                <div key={productInCart.id} className="cart-item">
                    <div className="nombreEImagen">
                        <img src={productInCart.image} alt="" />
                        <h5>{productInCart.name}</h5>
                    </div>
                    <div className="botonesMenosYMas">
                        <button
                            onClick={() => {
                                if (productInCart.quantity > 1) {
                                    decrementQuantity(productInCart.id);
                                } else {
                                    removeProductInCart(productInCart.id);
                                }
                            }}
                        >
                            -
                        </button>

                        <span>Cantidad : {productInCart.quantity} </span>

                        <button onClick={() => incrementQuantity(productInCart.id)}>+</button>
                    </div>
                    <div className="subTottalYEliminar">
                        <span>SubTotal : {productInCart.price} </span>
                        <button
                            onClick={() =>
                                removeProductInCart(productInCart.id)
                            }
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}

            {cart.length > 0 && (
                <div className="cartTotalEImporte">
                    <h2 className="cartTotal">
                        Total :{" "}
                        {cart.reduce(
                            (total, productInCart) =>
                                total + productInCart.price,
                            0
                        )}
                    </h2>
                </div>
            )}

            {cart.length > 0 && (
                <button onClick={() => emptyToCart()} className="vaciarCarrito">
                    Vaciar carrito
                </button>
            )}
        </div>
    );
};

export default Cart;
