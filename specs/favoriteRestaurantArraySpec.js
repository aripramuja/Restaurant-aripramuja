/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";

let favoriteRestaurants = [];

const favoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAllRestaurant() {
    return favoriteRestaurants;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty("id")) {
      return;
    }

    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },
};

describe("Favorite restaurant array contract test", () => {
  afterEach(() => (favoriteRestaurants = []));

  itActsAsFavoriteRestaurantModel(favoriteRestaurantArray);
});
