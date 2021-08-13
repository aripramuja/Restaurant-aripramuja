/* eslint-disable quotes */
import favoriteRestaurantIdb from "../src/scripts/data/restaurant-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Unliking Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await favoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await favoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should display unlike widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it("should not display unlike widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it("should be able to remove liked restaurant from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event("click"));
    const allRestaurant = await favoriteRestaurantIdb.getAllRestaurant();

    expect(allRestaurant).toEqual([]);
  });

  it("should not throw error if the unliked restaurant is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await favoriteRestaurantIdb.deleteRestaurant(1);
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event("click"));
    const allRestaurant = await favoriteRestaurantIdb.getAllRestaurant();

    expect(allRestaurant).toEqual([]);
  });
});
