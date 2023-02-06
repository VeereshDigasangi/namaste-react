import Constants from "../common/constants";
import { useDispatch } from "react-redux";
import { addItems, removeItem } from "../utils/cartSlice";
export default FoodIte = ({ name, description, cloudinaryImageId, price }) => {
  const dispatch = useDispatch();

  function handleRemoveItem(item) {
    dispatch(removeItem());
  }
  function addFoodItem(item) {
    dispatch(addItems(item));
  }

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={Constants.CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl p-2">{name}</h2>
      <h3 className="p-1">{description}</h3>
      <h4 className="p-2 font-bold">Rupees: {price / 100}</h4>
      <button
        className="bg-green-200 m-2 p-2 text-xl"
        onClick={() =>
          addFoodItem({ name, description, cloudinaryImageId, price })
        }
      >
        +
      </button>
      <button
        className="bg-green-200 m-2 p-2 text-xl"
        onClick={() => handleRemoveItem()}
      >
        -
      </button>
    </div>
  );
};
