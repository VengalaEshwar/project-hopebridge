import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../helpers/axiosInstance'
import toast from 'react-hot-toast'

// First, create the thunk
const getUser= createAsyncThunk(
  'user/getUser',
  async (userId,thunkAPI) => {
    try{  
      const tempResponse =  axiosInstance.get("/user/"+userId,)
      toast.promise(tempResponse,{
        pending : "loading data",
      });
      const response = await tempResponse;
      return response.data
    }catch(e)
    {
      toast.error("some error occurred");
      console.log(error.message);
    }
  },
)


const initialState = {}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
    .addCase(getUser.fulfilled,(state,action)=>{
      if(action?.payload?.success)
      {
        state=action?.payload?.user
        toast.success(action?.payload?.message)
      }
      else
      {
        toast.error(action?.payload?.message)
      }
      return state;
    })
  },
})

// Later, dispatch the thunk as needed in the app
// Action creators are generated for each case reducer function
export { getUser};
export default userSlice.reducer;
