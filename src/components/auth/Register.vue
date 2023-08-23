<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
import { FIREBASE_API_KEY } from "../../config/firebase";

export default {
  name: "Register",
  components: {
    Form,
    Field,
  },
  emits: {
    "change-component": (payload) =>
      payload.componentName !== "login" ? false : true,
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("E-Mail Adresse wird benötigt!")
        .trim()
        .email("Das ist keine gültige E-Mail Adresse"),
      password: yup
        .string()
        .required("Ein Password wird benötigt")
        .min(6, "Bitte mindestens 6 Zeichen"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwörter stimmen nicht überein"),
    });
    const error = "";
    const isLoading = false;
    
    return {
      schema,
      error,
      isLoading,
    };
  },
  computed: {
    errorDisplayText() {
      if (this.error) {
        if (this.error.includes("EMAIL_EXISTS")) {
          return "Diese E-Mail Adresse existiert bereits.";
        }
        return "Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen Sie es noch einmal.";
      }
    },
  },
  methods: {
    submitData(values) {
      this.isLoading = true;
      this.error = "";

      const signupDataObj = {
        email: values.email,
        password: values.password,
        returnSecureToken: true,
      };
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
          signupDataObj
        )
        .then((res) => {
          this.isLoading = false;
          this.changeComponent("login");
        })
        .catch((error) => {
          this.error = error.response.data.error.message;
          this.isLoading = false;
        });
    },
    changeComponent(componentName) {
      this.$emit("change-component", { componentName });
    },
  },
};
</script>

<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="../../assets/welcome.svg" alt="" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt registrieren</h2>
      <p>
        oder
        <a class="text-vue2" role="button" @click="changeComponent('login')"
          >melden Sie sich mit ihrem Konto an</a
        >
      </p>
    </div>
    <div class="alert alert-danger col-md-8 offset-2" v-if="error">
      {{ errorDisplayText }}
    </div>
    <Form @submit="submitData" :validation-schema="schema" v-slot="{ errors }">
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="email"><strong>E-Mail-Adresse</strong></label>
          <Field
            as="input"
            name="email"
            type="email"
            class="form-control"
            id="email"
          />
          <small class="text-danger" v-if="errors.email">{{
            errors.email
          }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="password"><strong>Password</strong></label>
          <Field
            as="input"
            name="password"
            type="password"
            class="form-control"
            id="password"
          />
          <small class="text-danger" v-if="errors.password">{{
            errors.password
          }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="confirmPassword"
            ><strong>Password wiederholen</strong></label
          >
          <Field
            as="input"
            name="confirmPassword"
            type="password"
            class="form-control"
            id="confirmPassword"
          />
          <small class="text-danger" v-if="errors.confirmPassword">{{
            errors.confirmPassword
          }}</small>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="form-group col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">
              <span v-if="!isLoading">Registrieren</span>
              <span v-else class="spinner-border spinner-border-sm"></span>
            </button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<style></style>
