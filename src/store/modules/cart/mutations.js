import { ADD_CART_ITEM } from "./mutations-types";

export const mutations = {
  [ADD_CART_ITEM](state, payload) {
    state.cartItems.push(payload);
  },
};