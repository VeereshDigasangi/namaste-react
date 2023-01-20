import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Constants from "../common/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export default RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(Constants.MENU_LIST_URL + id);
    const restInfo = await data.json();
    setRestaurantDetails(restInfo.data);
    setImageUrl(Constants.CDN_URL + restInfo.data?.cloudinaryImageId);
  }
  if (restaurantDetails == {}) return <Shimmer />;
  const handleLinkClick = (id) => {
    setImageUrl(Constants.CDN_URL + id);
  };
  return (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurantDetails?.name}</h2>
        <img src={imageUrl} />
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
                <Link
                  key={item?.id}
                  onClick={() => handleLinkClick(item.cloudinaryImageId)}
                >
                  <li>{item?.name}</li>
                </Link>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};
