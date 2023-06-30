import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {removeFromWatchList}  from '../../../store/slice'
import "./WatchList.css"

const WatchList = () => {
  const store = useSelector((state) => state.user.listItems);
  const dispatch=useDispatch()
   const handleClick=(item)=>{
      dispatch(removeFromWatchList(item))
    }
  return (
     <div className="card">
                {
                    store.map(stock => {
                        return (
                            <div className="cards" key={stock.symbol}>
                              <h4 style={{fontWeight:"500",color:"gray",letterSpacing:"1px"}}>Name:{stock.name}</h4>
                              <h4 style={{fontWeight:"500",color:"gray",letterSpacing:"1px"}}>Symbol:{stock.symbol}</h4>
                              <h4 style={{fontWeight:"500",color:"palevioletred",letterSpacing:"1px"}}>Stock Price:$ {stock.price}</h4>
                              <button id="button" onClick={()=>handleClick(stock)}  className="btn btn-info">Remove</button>
                            </div>
                        )
                    })
                }
            </div>
  )
}

export default WatchList