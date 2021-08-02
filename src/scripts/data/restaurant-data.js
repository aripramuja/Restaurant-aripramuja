import data from "../../DATA.json";

class restaurantData {
  static async getAll() {
    const response = await data;
    return response;
  }
}

export default restaurantData;
