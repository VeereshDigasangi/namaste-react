import { useParams } from "react-router-dom";
import Constants from "../common/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

export default RestaurantMenu = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurantDetails = useRestaurant(id);
  if (restaurantDetails == {}) return <Shimmer />;
  function handleAddItems(item) {
    dispatch(addItems(item));
  }
  return (
    <div className="flex">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurantDetails?.name}</h2>
        <img src={Constants.CDN_URL + restaurantDetails?.cloudinaryImageId} />
        <h3>Location: {restaurantDetails?.area}</h3>
        <h3>{restaurantDetails?.city}</h3>
        <h3>Rating: {restaurantDetails?.avgRating} stars</h3>
        <h3>Price: {restaurantDetails?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1 className="flex text-2xl m-2">MENU</h1>
        <ul className="m-2 p-2">
          {restaurantDetails
            ? Object.values(restaurantDetails?.menu?.items)?.map((item) => (
                <li key={item.id}>
                  {item?.name}
                  <button
                    className="bg-green-100 p-2 m-2 hover:bg-blue-300 font-bold py-2 px-4 rounded transition duration-500 ease-in-out"
                    onClick={() => handleAddItems(item)}
                  >
                    Add Item
                  </button>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};
