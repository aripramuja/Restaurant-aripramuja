import Home from "../views/pages/restaurant-home";
import Favorite from "../views/pages/restaurant-favorite";
import Detail from "../views/pages/restaurant-detail";

const routes = {
  "/": Home,
  "/favorite": Favorite,
  "/restaurant/:id": Detail,
};

export default routes;
