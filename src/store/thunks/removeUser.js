import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  const response = await axios.delete(`http://localhost:3001/users/${user.id}`)
  //DEV ONLY
  //await pause(2000);
  //
  console.log(response)
  return user;
});

//DEV ONLY
//const pause = (duration) => {
  //return new Promise((resolve) => {
    //setTimeout(resolve, duration);
  //})
//}

export { removeUser };