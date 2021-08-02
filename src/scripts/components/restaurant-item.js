class restaurantItem extends HTMLElement {
  set restaurantDataItem(restaurantDataItem) {
    this._restaurantDataItem = restaurantDataItem;
    this.render();
  }

  render() {
    this.innerHTML = `
            <article class="restaurant-item">
                <img  class="restaurant-img" src="${this._restaurantDataItem.pictureId}" alt="${this._restaurantDataItem.name}">
                <div class="restaurant-item-detail">
                    <small> Rating ${this._restaurantDataItem.rating} | Location ${this._restaurantDataItem.city}</small> 
                    <h2 >${this._restaurantDataItem.name}</h2>               
                </div>
            </article>`;
  }
}

customElements.define("restaurant-item", restaurantItem);
