import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name : 'Feed' ,
    initialState :null ,
    reducers :{
        getFeeds :(state , action) =>{
            return action.payload ;
        },
         removeUserFromFeed :(state , action) =>{
            const nextFeed  = state.filter((s)=>{
                return s._id !== action.payload ;
            })
            return nextFeed ;
        }
    }
})


export const {getFeeds , removeUserFromFeed}  = feedSlice.actions ;
export default feedSlice.reducer ; 