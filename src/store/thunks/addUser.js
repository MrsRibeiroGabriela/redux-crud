import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import {faker} from '@faker-js/faker'

const addUser = createAsyncThunk("users/add", async (data) => {
  const response = await axios.post("http://localhost:3001/users", data);
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

export { addUser };