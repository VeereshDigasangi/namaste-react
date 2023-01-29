import { useParams } from "react-router-dom";
import Constants from "../common/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

export default RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantDetails = useRestaurant(id);
  if (restaurantDetails == {}) return <Shimmer />;
  return (
    <div className="menu">
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
        <h1>MENU</h1>
        <ul>
          {restaurantDetails
            ? Object.values(restaurantDetails?.menu?.items)?.map((item) => (
                <li key={item.id}>{item?.name}</li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};
