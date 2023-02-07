import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

export default Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const haveCartItems = Object.keys(cartItems).length;

  const dispatch = useDispatch();
  function handleClearItems() {
    dispatch(clearCart());
  }
  function totalItemsPrice(items) {
    let totalPrice = 0;
    for (const key in items) {
      totalPrice += (items[key].price / 100) * items[key].itemCount;
    }
    return totalPrice;
  }
  return (
    <div>
      <h1 className="font-bold text-3xl">
        Cart Items: {Object.keys(cartItems).length}
      </h1>
      {haveCartItems > 0 && (
        <button
          className="bg-green-100 p-2 m-5 hover:bg-blue-300 font-bold py-2 px-4 rounded transition duration-500 ease-in-out"
          onClick={() => handleClearItems()}
        >
          Clear Cart
        </button>
      )}
      <div className="flex">
        {Object.keys(cartItems).map((item) => (
          <FoodItem key={item} {...cartItems[item]} />
        ))}
      </div>
      <h1 className="font-bold text-3xl">
        Total Price:{totalItemsPrice(cartItems)}/-
      </h1>
    </div>
  );
};
