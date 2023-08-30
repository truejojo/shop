import axios from "axios";
import { FIREBASE_API_KEY } from "../../../config/firebase";

let timer;

const state = {
  userId: null,
  token: null,
};

const mutations = {
  setUser(state, payload) {
    state.userId = payload.userId;
    state.token = payload.token;
  },
};

const actions = {
  auth(context, payload) {
    const urlState =
      payload.mode === "signin" ? "signInWithPassword" : "signUp";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${urlState}?key=${FIREBASE_API_KEY}`;

    const authDataObj = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };

    return axios
      .post(url, authDataObj)
      .then((response) => {
        // Daten im LocalStorage speichern
        const expiresIn = parseInt(response.data.expiresIn) * 1000;
        const expDate = new Date().getTime() + expiresIn;

        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("userId", response.data.localId);
        localStorage.setItem("expiresIn", expDate);

        timer = setTimeout(() => {
          context.dispatch("autoSignout");
        }, expiresIn);

        context.commit("setUser", {
          userId: response.data.localId,
          token: response.data.idToken,
        });
      })
      .catch((error) => {
        const errorMessage = new Error(
          error.response.data.error.message || "UNKNOWN_ERROR"
        );
        throw errorMessage;
      });
  },
  signup(context, payload) {
    const signupDataObj = {
      ...payload,
      mode: "signup",
    };

    return context.dispatch("auth", signupDataObj);
  },
  signin(context, payload) {
    const signinDataObj = {
      ...payload,
      mode: "signin",
    };

    return context.dispatch("auth", signinDataObj);
  },
  signout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiresIn");

    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userId: null,
    });
  },
  autoSignin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expiresIn = localStorage.getItem("expiresIn");
    const timeLeft = parseInt(expiresIn) - new Date().getTime();

    if (timeLeft < 0) return;

    timer = setTimeout(() => {
      context.dispatch("autoSignout");
    }, expiresIn);

    if (token && userId) {
      context.commit("setUser", {
        token,
        userId,
      });
    }
  },
  autoSignout(context) {
    context.dispatch("signout");
  },
};

const getters = {
  isAuthenticated: (state) => !!state.token,
};

const authModule = {
  state,
  mutations,
  actions,
  getters,
};

export default authModule;
