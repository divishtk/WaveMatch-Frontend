import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name : 'Feed' ,
    initialState :null ,
    reducers :{
        getFeeds :(state , action) =>{
            return action.payload ;
        },
         removeFeed :(state , action) =>{
            return null ;
        }
    }
})


export const {getFeeds , removeFeed}  = feedSlice.actions ;
export default feedSlice.reducer ; 