import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import yourConnectionReducer from "./yourConnectionsSlice";

const appStore = configureStore ({
    reducer :{
        user : userReducer,
        feed:  feedReducer ,
        yourConnections : yourConnectionReducer
    }
}) ;

export default appStore ;