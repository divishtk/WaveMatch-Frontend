import { createSlice } from "@reduxjs/toolkit";

const yourConnectionsSlice = createSlice({
    name: 'yourConnections',
    initialState : null ,
    reducers :{
        addConnections :(state , action)=> {
            return action.payload
        },
        removeConnections:()=>{
            return null ;
        }
    }
})

export const {addConnections ,removeConnections} = yourConnectionsSlice.actions ;
export default yourConnectionsSlice.reducer