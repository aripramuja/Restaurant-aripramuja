import requestLoading from "../templates/request-loading";
import restaurantSource from "../../data/restaurant-source";
import restaurantList from "../templates/restaurant-list";
import { initSwalError } from "../../utils/swal-initiator";

const Home = {
  async render() {
    return `
      <div class="container">
        <div id="loading">
          <p>Loading</p>
        </div>

        <div id="main-container">
          <h1 class="restaurant-header">Explore Restaurant</h1>

          <section id="explore-restaurant"></section>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector("#loading");
    const mainContainer = document.querySelector("#main-container");
    const listContainer = document.querySelector("#explore-restaurant");

    mainContainer.style.display = "none";
    loading.innerHTML = requestLoading();

    try {
      const data = await restaurantSource.getRestaurantList();

      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += restaurantList(restaurant);
      });

      loading.style.display = "none";
      mainContainer.style.display = "block";
    } catch (err) {
      console.error(err);

      mainContainer.style.display = "block";
      loading.style.display = "none";
      listContainer.innerHTML = `Error: ${err.message}`;
      initSwalError(err.message);
    }
  },
};

export default Home;
