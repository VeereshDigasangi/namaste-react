import { useState, useEffect } from "react";
import Constants from "../common/constants";
export default useRestaurant = (id) => {
  //   const [imageUrl, setImageUrl] = useState("");
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(Constants.MENU_LIST_URL + id);
    const restInfo = await data.json();
    setRestaurantDetails(restInfo.data);
    // setImageUrl(Constants.CDN_URL + restInfo.data?.cloudinaryImageId);
  }

  return restaurantDetails;
};

// export const handleLinkClick = (item) => {
//     const [imageUrl, setImageUrl] = useState("");
//     const [restaurantDetails, setRestaurantDetails] = useState(null);

//   //   setImageUrl(Constants.CDN_URL + item.cloudinaryImageId);
//   setImageUrl(Constants.CDN_URL + item.cloudinaryImageId); //change image
//   restaurantDetails.name = item.name; //change name
//   restaurantDetails.costForTwoMsg = +item.price / 100; //because price is in paise
//   setRestaurantDetails(restaurantDetails);
// };
