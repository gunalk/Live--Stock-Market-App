import {createSlice} from "@reduxjs/toolkit"
const initialState={
    searchList:"",
    listItems:[]
}

export const Reducer=createSlice({
  name:'user',
  initialState,
  reducers:{
   addToSearchList:(state,action)=>{
     state.searchList=action.payload
   },
    addingToListItems:(state,action)=>{
     let presentData=state.listItems.find((ele)=>ele.name == action.payload.name)
     console.log(presentData)
     
      if(presentData){
        alert("already added to watchList")
      }
       
      else{
        state.listItems.push(action.payload)
      }
    },
    removeFromWatchList:(state,action)=>{
      let data=state.listItems.filter((state,index)=>state.name!=action.payload.name)
      console.log(data,"filter")
      state.listItems=data
    }
   
  }
})


export const{addToSearchList,addingToListItems,removeFromWatchList}=Reducer.actions
export default Reducer.reducer