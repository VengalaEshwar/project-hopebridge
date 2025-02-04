import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
const initialState = {
  isLoggin: localStorage.getItem("isLoggin") === "true" || false,
  role: JSON.parse(localStorage.getItem("data"))?.role,
  data: JSON.parse(localStorage.getItem("data")),
};
const cookies = new Cookies();
const signUp = createAsyncThunk("auth/signup", async (data, thunkAPI) => {
  try {
    const response = axiosInstance.post("/auth/signup", data, {
      withCredentials: true,
    });
    await toast.promise(
      response.then((res) => {
        if (res?.data?.success)
          toast.success(res.data.message);
        else
          toast.error(res.data.message);
        return res;
      }),
      {
        pending: "Hold on, you're about to sign up...",
        error: (error) => error?.message,
      }
    );
    const res = await response;
    return res;
  } catch (error) {
    console.log(error.message);
  }
});

const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const tempResponse = axiosInstance.post("/auth/login", data, {
      withCredentials: true,
    });
    toast.promise(
      tempResponse.then((res) =>{
        if(res?.data?.success)
        toast.success(res?.data?.message);
        else
        toast.error(res?.data?.message);
      }),
      {
        loading: "Hold on, you're about to log in...",
      }
    );
    return await tempResponse;
  } catch (error) {
    console.log(error);
  }
});
const signUpOrphanage = createAsyncThunk(
  "auth/signupOrphanage",
  async (data, thunkAPI) => {
    try {
      const response = axiosInstance.post("/orphanage/create", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.promise(
        response.then((res) =>{
          if(res?.data?.success)
          toast.success(res?.data?.message);
          else
          toast.error(res?.data?.message);
        }),
        {
          pending: "Hold on, you're about to sign up the orphanage...",
          error: (error) => error.message || "An error occurred",
        }
      );
      const res = await response;
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }
);

// const logout =
// const incCount =
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      try {
        cookies.remove("JWT_TOKEN"); // Remove cookie
        toast.success("Logout successful!");
        localStorage.setItem("isLoggin", "false");
        localStorage.setItem("role", "none");
        localStorage.setItem("data", "null");
        return {
          isLoggin: false,
          role: null,
          data: null,
        };
      } catch (e) {
        toast.error("you are logged out");
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const token = action?.payload?.data?.JWT_TOKEN;
      const decode = jwtDecode(token);
      localStorage.setItem("isLoggin", "true");
      localStorage.setItem(
        "data",
        JSON.stringify(action?.payload?.data?.userData)
      );
      cookies.set("JWT_TOKEN", token, {
        expires: new Date(decode.exp * 1000),
      });

      return {
        ...state,
        isLoggin: true,
        role: action?.payload?.data?.userData?.role || null,
        data: action?.payload?.data?.userData || null,
        // success : action?.payload?.data?.status
      };
    });
  },
});

// Action creators are generated for each case reducer function
export { signUp, login, signUpOrphanage };
export const { logout } = authSlice.actions;
export default authSlice.reducer;
