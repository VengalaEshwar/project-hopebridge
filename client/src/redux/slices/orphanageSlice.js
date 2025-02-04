
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../helpers/axiosInstance'
import toast from 'react-hot-toast'

// First, create the thunk
const getOrphanage= createAsyncThunk(
  'user/getOrphanage',
  async (orphanageId,thunkAPI) => {
    try{  
      const tempResponse =  axiosInstance.get("/orphanage/"+orphanageId)
      toast.promise(tempResponse,{
        pending : "loading data",
        error : "some error occurred"
      });
      const response = await tempResponse;
      return response.data
    }catch(e)
    {
      console.log(error.message);
    }
  },
)


const initialState = {}

const orphanageSlice = createSlice({
  name: 'orphanage',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
    .addCase(getOrphanage.fulfilled,(state,action)=>{
      if(action?.payload?.success)
      {
        state={
            ...action?.payload?.orphanageDetails
        }
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
export { getOrphanage};
export default orphanageSlice.reducer;

// const orphanageID = useSelector((state)=>state.auth.data.id);
// const [orphanageDetails,setOrphanageDetails]=useState({});
// useEffect(()=>{
//   const fetchDetails = async ()=>{
//     const response = await axiosInstance.get(`/orphanage/${orphanageID}`);
//     console.log(response.data.orphanageDetails);
//   }
//   fetchDetails();
// },[])
