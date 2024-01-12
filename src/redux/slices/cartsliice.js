import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                const remainingProdct=state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                state=[...remainingProdct,existingProduct]
            }
            else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        removefromCart:(state,action)=>{
         return   state.filter(item=>item?.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state= []
        },
        incrementQuantity:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload.id)
            existingProduct.quantity++
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            const remainingProdct=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProdct,existingProduct]

        },
        DecrementQuantity:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload.id)
            existingProduct.quantity--
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            const remainingProdct=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProdct,existingProduct]

        }

    }


})
export const {addtocart ,removefromCart,emptyCart,incrementQuantity,DecrementQuantity}=cartSlice.actions
export default cartSlice.reducer