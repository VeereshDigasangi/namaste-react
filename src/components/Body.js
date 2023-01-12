import { useState } from "react";
import restaurantList from "../../resources/restaurant_list.json";
import RestrauntCard from "./Restaurant";
export default Body = () => {
  const [restaurants, setRestaurantList] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search Here"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = searchRestaurant(restaurants, e.target.value);
            console.log(data);
            setRestaurantList(data);
          }}
        />
        {/* <button
          className="search-btn"
          onClick={() => {
            console.log("searchTest ", typeof searchText);
            const data = searchRestaurant(restaurants, searchText);
            console.log(data);
            setRestaurantList(data);
          }}
        >
          Search
        </button> */}
      </div>
      <div className="restaurant-list">
        {restaurants.map((rest) => {
          return <RestrauntCard {...rest.data} key={rest.data.id} />;
        })}
      </div>
    </>
  );
};

function searchRestaurant(restaurants, searchText) {
  console.log("restaurants ", restaurants);
  console.log("text ", searchText);
  if (!searchText) return restaurantList;
  else {
    const result = restaurants.filter((rest) =>
      rest.data.name.includes(searchText)
    );
    console.log("result", result);
    return result;
  }
}
