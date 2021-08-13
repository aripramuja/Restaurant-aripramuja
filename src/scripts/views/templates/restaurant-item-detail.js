/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from "../../globals/config";

const restaurantDetail = (restaurant) => `
  <div class="detail card">
    <img alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL_SM + restaurant.pictureId}"/>

    <div class="restaurant-information">
      <div class="like" id="likeButtonContainer"></div>
      <small> Rating ${restaurant.rating}</small>
      <strong> ${restaurant.address}, ${restaurant.city} </strong>
      <h2 class="detail-name">${restaurant.name}</h2>
      <article class="restaurant-description">${restaurant.description}</article>
      <h4> Kategori : ${restaurant.categories
        .map(
          (category) => `
            <span class="restaurant-category">${category.name}</span>
          `
        )
        .join("")}
      </h4>
    </div>

    <h3>Menu</h3>
    <div class="detail-menu">
      <div class="detail-food">
        <h4>Makanan</h4>
        <ul>
          ${restaurant.menus.foods
            .map(
              (food, i) => `
                <li><p>${i + 1} ${food.name}</p></li>
              `
            )
            .join("")}
        <ul>
      </div>

      <div class="detail-drink">
        <h4>Minuman</h4>
        <ul>
          ${restaurant.menus.drinks
            .map(
              (drink, i) => `
                <li><p>${i + 1} ${drink.name}</p></li>
              `
            )
            .join("")}
        <ul>
      </div>
    </div>

    <h3 >Reviews</h3>
    <div class="detail-review card">
    ${restaurant.customerReviews
      .map(
        (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name">${review.name}</p>

              <p class="review-date">${review.date}</p>
            </div>

            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `
      )
      .join("")}
    </div>
  </div>
`;

export default restaurantDetail;
