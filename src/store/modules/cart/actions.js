import { ADD_ITEM_TO_CART } from "./actions-types";

// context = { commit, dispatch, state, rootState, getters, rootGetters }
export const actions = {
  [ADD_ITEM_TO_CART]({ commit }, payload) {
    commit("addCartItem", {
      productId: payload.productId,
    });
  },
};
