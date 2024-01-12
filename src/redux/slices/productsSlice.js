import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts=createAsyncThunk(
    'products/fetchProducts',async()=>{
        const response = await axios.get('https://dummyjson.com/products')
        sessionStorage.setItem("allproducts",JSON.stringify(response.data.products))
        return response.data.products
    }
)


const productsSlice=createSlice({
    name:'products',
    initialState:{
        //sates
        allproducts:[],
        allproductDummy:[],
        loading:false,
        error:"",
        productsperPage:10,
        currentpage:1

    },
    reducers:{
        //actions
        serchByproduct:(state,action)=>{
            state.allproducts=state.allproductDummy.filter(item=>item.title.toLowerCase().includes(action.payload))
        },
        navigateToNextpage:(state)=>{
            state.currentpage++
        },
        navigateToPrevpage:(state)=>{
            state.currentpage--
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.allproducts=action.payload
            state.allproductDummy=action.payload
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.loading=false
            state.allproducts=[]
            state.error="API call failed..please try after some times..!"
        })
    }
})
export default productsSlice.reducer
export const {serchByproduct,navigateToNextpage,navigateToPrevpage}=productsSlice.actions