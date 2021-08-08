import favoriteRestaurantIdb from "../../data/restaurant-idb";
import restaurantList from "../templates/restaurant-list";

const Favorite = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>
      <h1 class="restaurant-header">Favorite Restaurant</h1>

        <section id="favorite-restaurant"></section>
      </div>
    `;
  },

  async afterRender() {
    const data = await favoriteRestaurantIdb.getAllRestaurant();

    const favoriteRestaurantData = document.querySelector("#favorite-restaurant");
    if (data.length === 0) {
      favoriteRestaurantData.innerHTML = `
      <h1 class="restaurant-header">Anda Belum Memasukan Restaurant Favorite</h1>
      `;
    }

    data.forEach((restaurant) => {
      favoriteRestaurantData.innerHTML += restaurantList(restaurant);
    });
  },
};

export default Favorite;
