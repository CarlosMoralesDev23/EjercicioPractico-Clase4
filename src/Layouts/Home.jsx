import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Main from "../Components/Main";
import Cart from "../Components/Cart";
import ListProducts from "../Components/ListProducts";
import Footer from "../Components/Footer";

const Home = ({
    cart,
    addToCart,
    emptyToCart,
    removeProductInCart,
    decrementQuantity,
    incrementQuantity,
}) => {
    return (
        <>
            <Header />
            <Nav />
            <Main />

            <Cart
                cart={cart}
                emptyToCart={emptyToCart}
                removeProductInCart={removeProductInCart}
                decrementQuantity={decrementQuantity}
                incrementQuantity={incrementQuantity}
            />
            <ListProducts addToCart={addToCart} />

            <Footer />
        </>
    );
};

export default Home;
