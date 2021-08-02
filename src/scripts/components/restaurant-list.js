import "./restaurant-item";

class restaurantList extends HTMLElement {
  set restaurantDataList(item) {
    this._restaurantDataList = item;
    this.render();
  }

  render() {
    for (let restaurant of this._restaurantDataList) {
      const restaurantItemElement = document.createElement("restaurant-item");
      restaurantItemElement.restaurantDataItem = restaurant;
      this.appendChild(restaurantItemElement);
    }
  }
}

customElements.define("restaurant-list", restaurantList);
