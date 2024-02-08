import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "../Features/PeopleSlice";

export const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
});
