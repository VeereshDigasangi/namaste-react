import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

export default Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  Object.keys("cartItems", cartItems);
  const dispatch = useDispatch();
  function handleClearItems() {
    dispatch(clearCart());
  }
  return (
    <div>
      <h1 className="font-bold text-3xl">
        Cart Items: {Object.keys(cartItems).length}
      </h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearItems()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {Object.keys(cartItems).map((item) => (
          <FoodItem key={item} {...cartItems[item]} />
        ))}
      </div>
    </div>
  );
};
