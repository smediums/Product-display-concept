import "./Cart.scss";

const Cart = ({ cartItems, setCartItems, showCart }) => {
  return (
    <div className={`cart ${showCart === true ? "showCart" : ""}`}>
      <div className="cartList">
        <h5 className={cartItems.length > 0 ? "hasItem" : ""}>
          Your cart is empty
        </h5>
        {cartItems.map((item) => (
          <div className="item" key={item.title}>
            <img className="cartImg" src={item.src} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
        <button className={`checkout ${cartItems.length > 0 ? "hasItem" : ""}`}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
