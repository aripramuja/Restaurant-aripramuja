/* eslint-disable no-underscore-dangle */
// import favoriteRestaurantIdb from "../data/restaurant-idb";
import { createLikeButtonTemplate, createLikedButtonTemplate } from "../views/templates/like-button";
import { initSwalError, initSwalSuccess } from "./swal-initiator";

const LikeButtonPresenter = {
  async init({ likeButtonContainer, data, favoriteRestaurantIdb }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;
    this._favoriteRestaurantIdb = favoriteRestaurantIdb;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;

      const restaurant = await this._favoriteRestaurantIdb.getRestaurant(id);

      if (restaurant) {
        this._renderLikedButtonTemplate();
      } else {
        this._renderLikeButtonTemplate();
      }
    } catch (err) {
      console.error(err);
      initSwalError(err.message);

      throw new Error(err);
    }
  },

  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector("#likeButton");

    likeButton.addEventListener("click", async () => {
      await this._favoriteRestaurantIdb.putRestaurant(this._restaurant);
      initSwalSuccess("Restaurant ditambahkan ke favorite...");
      this._renderButton();
    });
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector("#likeButton");

    likeButton.addEventListener("click", async () => {
      await this._favoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      initSwalError("Restaurant dikeluarkan dari favorite...");
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
