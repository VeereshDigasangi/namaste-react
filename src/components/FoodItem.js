import Constants from "../common/constants";
import { useDispatch } from "react-redux";
import { addItems, removeItem } from "../utils/cartSlice";
export default FoodIte = ({
  id,
  name,
  description,
  cloudinaryImageId,
  price,
  itemCount,
}) => {
  const dispatch = useDispatch();
  function handleRemoveItem(id) {
    dispatch(removeItem(id));
  }
  function addFoodItem(item) {
    dispatch(addItems(item));
  }
  return (
    itemCount && (
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img src={Constants.CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold text-xl p-2">{name}</h2>
        <h3 className="p-1">{description}</h3>
        <h4 className="p-2 font-bold">Items Count: {itemCount}</h4>
        <h4 className="p-2 font-bold">Rupees: {(price / 100) * itemCount}</h4>
        <button
          className="bg-green-200 m-2 p-2 text-xl"
          onClick={() =>
            addFoodItem({ id, name, description, cloudinaryImageId, price })
          }
        >
          +
        </button>
        <button
          className="bg-green-200 m-2 p-2 text-xl"
          onClick={() => handleRemoveItem(id)}
        >
          -
        </button>
      </div>
    )
  );
};
