export function filterData(searchText, restaurants) {
  if (!searchText) return restaurantList;
  else {
    const result = restaurants.filter((rest) =>
      rest.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return result;
  }
}
