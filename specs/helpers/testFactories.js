/* eslint-disable object-shorthand */
/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";
import favoriteRestaurantIdb from "../../src/scripts/data/restaurant-idb";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestaurantIdb: favoriteRestaurantIdb,
    data: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithRestaurant };
