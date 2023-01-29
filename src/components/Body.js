import { useEffect, useState } from "react";
import RestrauntCard from "./Restaurant";
import Shimmer from "./Shimmer";
import Constants from "../common/constants";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

export default Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API call
    restaurantList = getRestaurants();
  }, []);
  async function getRestaurants() {
    let data = await fetch(Constants.RESTAURANT_LIST_URL);
    data = await data.json();
    setFilteredRestaurants(data.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(data.data?.cards[2]?.data?.data?.cards);
  }
  if (!allRestaurants) return <Shimmer />;
  return (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          placeholder="Search Here"
          className="focus: bg-green-200 p-2 m-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-pink-500 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            if (!searchText) {
              setFilteredRestaurants(allRestaurants);
              return;
            }
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length ? (
          filteredRestaurants?.map((rest) => {
            return (
              <Link to={`/restaurant/${rest.data.id}`} key={rest.data.id}>
                <RestrauntCard {...rest.data} key={rest.data.id} />
              </Link>
            );
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

