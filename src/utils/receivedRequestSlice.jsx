import { createSlice } from "@reduxjs/toolkit";

const receivedReqSlice = createSlice({
    name : 'receivedReqSlice' ,
    initialState : null ,
    reducers: {
        addReceivedRequests :(state , action)=>{
            return action.payload ;
        } ,
        removeReceivedReq:(state,action)=>{
            const newArray =  state.filter(r =>r._id !== action.payload) ;
            return newArray ;
        }
    }
})

export const {addReceivedRequests ,removeReceivedReq} = receivedReqSlice.actions ;
export default receivedReqSlice.reducer