import { configureStore } from "@reduxjs/toolkit";
import usersReduce from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReduce,
  },
});

export * from "./thunks/fetchUser";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export * from "./thunks/editUser";
export * from "./thunks/fetchUserById";
