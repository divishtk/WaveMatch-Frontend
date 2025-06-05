import { createSlice } from "@reduxjs/toolkit";

const receivedReqSlice = createSlice({
    name : 'receivedReqSlice' ,
    initialState : null ,
    reducers: {
        addReceivedRequests :(state , action)=>{
            return action.payload ;
        } ,
        removeReceivedReq:()=>{
            return null ;
        }
    }
})

export const {addReceivedRequests ,removeReceivedReq} = receivedReqSlice.actions ;
export default receivedReqSlice.reducer