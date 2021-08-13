const assert = require("assert");

Feature("Favorite Restaurant");
const emptyFavoriteRestaurant = "Empty favorite Restaurant";

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty favorite restaurant", ({ I }) => {
  I.seeElement("#favorite-restaurant");
  I.see(emptyFavoriteRestaurant, "#favorite-restaurant");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see(emptyFavoriteRestaurant, "#favorite-restaurant");

  I.amOnPage("/");
  I.seeElement(".restaurant-item");
  const firstRestaurantList = locate(".restaurant-item a").first();
  const firstRestaurantListName = await I.grabTextFrom(firstRestaurantList);
  I.click(firstRestaurantList);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item");

  const firstRestaurantList1 = locate(".restaurant-item a").first();
  const likedRestaurantListName = await I.grabTextFrom(firstRestaurantList1);
  assert.strictEqual(firstRestaurantListName, likedRestaurantListName);
});

Scenario("unliking one restaurant", async ({ I }) => {
  I.see(emptyFavoriteRestaurant, "#favorite-restaurant");

  I.amOnPage("/");
  I.seeElement(".restaurant-item");

  const firstRestaurantListUnlike = locate(".restaurant-item a").first();
  const likedRestaurantListName = await I.grabTextFrom(firstRestaurantListUnlike);
  I.click(firstRestaurantListUnlike);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item");

  const likedRestaurantListNameUnlike = await I.grabTextFrom(".restaurant-item a");

  assert.strictEqual(likedRestaurantListName, likedRestaurantListNameUnlike);

  I.click(likedRestaurantListNameUnlike);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement("#favorite-restaurant");

  const emptyRestaurantFavorite = await I.grabTextFrom("#favorite-restaurant");

  assert.strictEqual(emptyRestaurantFavorite, emptyFavoriteRestaurant);
});
