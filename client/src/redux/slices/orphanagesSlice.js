import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

export const getOrphanages = createAsyncThunk(
  "orphanages/getOrphanages",
  async (_, thunkAPI) => { 
    try {
      const tempResponse = axiosInstance.get("/orphanage/getAll");
      toast.promise(tempResponse, {
        pending: "Loading data...",
        error: "Some error occurred",
      });
      const response = await tempResponse; 
      return response.data;
    } catch (e) {
      console.error("Error fetching orphanages:", e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const orphanagesSlice = createSlice({
  name: "orphanages",
  initialState: [], 
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrphanages.fulfilled, (state, action) => {
        state=action?.payload?.orphanages
      return state
    });
  },
});

export default orphanagesSlice.reducer; // ✅ Use `export default` properly
