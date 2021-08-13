import UrlParser from "../../routes/url-parser";
import requestLoading from "../templates/request-loading";
import restaurantSource from "../../data/restaurant-source";
import restaurantDetail from "../templates/restaurant-item-detail";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import favoriteRestaurantIdb from "../../data/restaurant-idb";
// import LikeButtonInitiator from "../../utils/like-button-initiator";
import PostReview from "../../utils/post-review";
import { initSwalError } from "../../utils/swal-initiator";
import { sendDataToWebsocket } from "../../utils/websocket-initiator";

const Detail = {
  async render() {
    return `
      <div class="container">
        <div id="loading"></div>
        
        <div id="main-container">
        <h1 class="restaurant-header">Detail Restaurant</h1>

          <section id="restaurant-detail"></section>

          <div class="form-review card">
            <form autocomplete="on">
              <div class="mb-3">
                <label for="name-input" class="form-label">Name</label>
                <input type="text" class="form-control" name="name-input" id="name-input" placeholder="Your name..." required>
              </div>

              <div class="mb-3">
                <label for="review-input" class="form-label">Review</label>
                <input type="text" class="form-control" name="review-input" id="review-input" placeholder="Your review..." required>
              </div>

              <button id="submit-review" type="submit" class="submit-btn">Submit Review</button>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const loading = document.querySelector("#loading");
    const mainContainer = document.querySelector("#main-container");
    const detailContainer = document.querySelector("#restaurant-detail");

    mainContainer.style.display = "none";
    loading.innerHTML = requestLoading();

    try {
      const data = await restaurantSource.getRestaurantDetail(url.id);

      console.info(data);
      detailContainer.innerHTML += restaurantDetail(data.restaurant);

      LikeButtonPresenter.init({
        data,
        favoriteRestaurantIdb,
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
      });

      mainContainer.style.display = "block";
      loading.style.display = "none";

      const btnSubmitReview = document.querySelector("#submit-review");
      const nameInput = document.querySelector("#name-input");
      const reviewInput = document.querySelector("#review-input");

      btnSubmitReview.addEventListener("click", async (error) => {
        error.preventDefault();

        await PostReview(url, nameInput.value, reviewInput.value);

        sendDataToWebsocket({
          name: nameInput.value,
          review: reviewInput.value,
        });

        nameInput.value = "";
        reviewInput.value = "";
      });
    } catch (error) {
      console.error(error);

      mainContainer.style.display = "block";
      loading.style.display = "none";
      detailContainer.innerHTML = `Error: ${error.message}`;
      initSwalError(error.message);
    }
  },
};

export default Detail;
