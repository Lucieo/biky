import { Product } from "../../types";
import { PRODUCTS } from "../../data/dummy-data";

type productsInitialState = {
  availableProducts: Product[];
  userProducts: Product[];
};

const productsInitialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = productsInitialState, action) => {
  return state;
};
