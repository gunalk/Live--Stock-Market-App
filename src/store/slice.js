import {createSlice} from "@reduxjs/toolkit"
 
const initialState={
    searchList:"",
    stockContainer:[],
    listItems:[],
    
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
        alert(`${action.payload.name} is already added to WatchList`)
      }
       
      else{
        
        state.listItems.push(action.payload)
        alert(`${action.payload.name} is added to WatchList`)
      }
    },
    addToStockContainer:(state,action)=>{
    state.stockContainer=action.payload  
    },
    removeFromWatchList:(state,action)=>{
      let data=state.listItems.filter((state,index)=>state.name!=action.payload.name)
      console.log(data,"filter")
      state.listItems=data
    }
   
  }
})


export const{addToSearchList,addingToListItems,removeFromWatchList, addToStockContainer}=Reducer.actions
export default Reducer.reducer
