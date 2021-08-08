import CONFIG from "../../globals/config";

const restaurantList = (restaurant) => `
    <div  class="restaurant-item">
          <img crossorigin="anonymous" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
        <div class="restaurant-item-detail">
            <small> Rating ${restaurant.rating} | Location ${restaurant.city}</small> 
            <h2 >${restaurant.name}</h2>               
        </div>
        <a href="#/restaurant/${restaurant.id}" class="btn">Show Detail</a>
        
    </div>
  `;

export default restaurantList;
