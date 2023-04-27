import { createStore } from "easy-peasy";
import { action } from "easy-peasy";

export const store = createStore({
  user: null,
  setUser: action((state, user) => {
    state.user = user;
  }),
});
