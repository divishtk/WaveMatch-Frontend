import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import yourConnectionReducer from "./yourConnectionsSlice";
import receivedRequestReducer from "./receivedRequestSlice"

const appStore = configureStore ({
    reducer :{
        user : userReducer,
        feed:  feedReducer ,
        yourConnections : yourConnectionReducer ,
        receivedRequests : receivedRequestReducer
    }
}) ;

export default appStore ;