import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const editUser = createAsyncThunk("users/edit", async (user) => {
  const response = await axios.put(`http://localhost:3001/users/${user.id}`, user);
  //DEV ONLY
  //await pause(2000);
  //
  return response.data;
});

//DEV ONLY
//const pause = (duration) => {
  //return new Promise((resolve) => {
    //setTimeout(resolve, duration);
  //})
//}

export { editUser };