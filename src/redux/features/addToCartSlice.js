import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    currentTotalItem:0,
    currentCartItemDetail:[]
}




export const AddtoCartSlice = createSlice({
    name:"AddToSlice",
    initialState,
    reducers:{
        increment : (state)=>{
            state.currentTotalItem += 1;
            console.log(state.currentTotalItem);
        },
        decrement:(state)=>{
            state.currentTotalItem-=1
        },
        addItemToCart :(state,action)=>{
            state.currentCartItemDetail.push(action.payload)
        },
        removeItemToCart :(state,action)=>{
            state.currentCartItemDetail.splice(action.payload, 1);
        }

    }
   
})

export const { increment, decrement,addItemToCart,removeItemToCart } = AddtoCartSlice.actions
export default AddtoCartSlice.reducer