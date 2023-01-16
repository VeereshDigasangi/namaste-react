import { useEffect, useState } from "react";
import RestrauntCard from "./Restaurant";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_URL } from "../common/constants";

export default Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    restaurantList = getRestaurants();
  }, []);
  async function getRestaurants() {
    let data = await fetch(RESTAURANT_LIST_URL);
    data = await data.json();
    setFilteredRestaurants(data.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(data.data?.cards[2]?.data?.data?.cards);
  }
  console.log("render", allRestaurants);
  if (!allRestaurants) return <Shimmer />;
  // if (!filteredRestaurants.length)
  //   return <h1>No results matches to search text</h1>;
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
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            console.log("data", data);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length ? (
          filteredRestaurants?.map((rest) => {
            return <RestrauntCard {...rest.data} key={rest.data.id} />;
          })
        ) : searchText ? (
          <h2>No records exist</h2>
        ) : (
          <Shimmer />
        )}
      </div>
    </>
  );
};

function filterData(searchText, restaurants) {
  if (!searchText) return restaurantList;
  else {
    const result = restaurants.filter((rest) =>
      rest.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("result", result);
    return result;
  }
}
