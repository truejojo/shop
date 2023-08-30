import axios from "axios";


const state = {
  products: [],
};
const mutations = {
  addProduct(state, payload) {
    state.products.push(payload);
  },
};
const actions = {
  storeProduct(context, payload) {
    const productItem = {
      title: payload.title,
      price: payload.price,
      description: payload.description,
    };
    const token = context.state.data.auth.token;
console.log(token);
    axios
      .post(
        "https://vue-shop-fe4df-default-rtdb.europe-west1.firebasedatabase.app/products.json",
        productItem
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
const getters = {};

const shopModule = {
  state,
  mutations,
  actions,
  getters,
};

export default shopModule;
