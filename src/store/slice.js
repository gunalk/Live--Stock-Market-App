import {createSlice} from "@reduxjs/toolkit"
const initialState={
    searchList:""
}

export const Reducer=createSlice({
  name:'user',
  initialState,
  reducers:{
   addToSearchList:(state,action)=>{
     state.searchList=action.payload
   } 
   
  }
})


export const{addToSearchList}=Reducer.actions
export default Reducer.reducer