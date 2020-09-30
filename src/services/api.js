import axios from "axios";
import { questionsFailure } from "../hooks/modules/auth/actions";

const api = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public`,
});

api.registerInterceptWithStore = async (store) => {
  api.interceptors.request.use(
    (response) => response,
    async (err) => {
      store.dispatch(questionsFailure());

      return Promise.reject(err);
    }
  );
};

export default api;
