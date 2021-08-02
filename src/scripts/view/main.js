import "../components/app-bar.js";
import "../components/hero-element";
import "../components/restaurant-list.js";
import "../components/app-footer.js";

import restaurantData from "../data/restaurant-data.js";

document.addEventListener("DOMContentLoaded", async () => {
  const response = await restaurantData.getAll();
  const { restaurants } = response;
  const dataElement = document.querySelector("#restaurant");
  const restaurantElement = document.createElement("restaurant-list");
  restaurantElement.restaurantDataList = restaurants;
  dataElement.appendChild(restaurantElement);
});
