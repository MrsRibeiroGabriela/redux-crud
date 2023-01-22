import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUserById = createAsyncThunk("users/fetchbyid", async (user) => {
  const response = await axios.get(`http://localhost:3001/users/${user.id}`)
  return response.data;
});

export { fetchUserById };