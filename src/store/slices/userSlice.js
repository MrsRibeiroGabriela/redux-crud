import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUser";
import { fetchUserById } from "../thunks/fetchUserById";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";
import { editUser } from "../thunks/editUser";


export const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  //reducers: {
  //addUser: (state, action) => {
  //console.log(action)
  //state.push(action.payload);
  //},
  //editUser: (state, action) => {
  //const { id, name, email } = action.payload;
  //const currentUser = state.find((user) => user.id === id);
  //if (currentUser) {
  //currentUser.name = name;
  //currentUser.email = email;
  //}
  //},
  //deleteUser: (state, action) => {
  //const { id } = action.payload;
  //const currentUser = state.find((user) => user.id === id);
  //if (currentUser) {
  //return state.filter((user) => user.id !== id);
  //}
  //},
  //},
  extraReducers(builder) {
    //User fetch
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    //User fetch by id
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    //Add user
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    //Remove user
    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((user) => user.id !== action.payload.id)
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    //Edit user
    builder.addCase(editUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((_) => _.id !== action.payload.id);
      state.data.unshift(action.payload);
    });
    builder.addCase(editUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default userSlice.reducer;
