import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state, action) => {
            // action.payload => jo humne input dala hai product.js mai add wale function mai he usko access krne ke liye 
            state.push(action.payload);
        },
        remove:(state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;