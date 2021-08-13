import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";
import favoriteRestaurantIdb from "../src/scripts/data/restaurant-idb";

describe("Favorite Restaurant Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await favoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await favoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(favoriteRestaurantIdb);
});
