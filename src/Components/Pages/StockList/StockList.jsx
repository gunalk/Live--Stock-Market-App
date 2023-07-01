import React, { useState, useEffect } from 'react'
import "./StockList.css"
import { useSelector,useDispatch } from 'react-redux'
import {addingToListItems}  from '../../../store/slice'

const StockList = () => {
    const keyword = useSelector((state) => state.user.searchList);
  
    const dispatch=useDispatch()
    
    const [stockList, setStockList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const handleClick=(item)=>{
      dispatch(addingToListItems(item))
      
      
    }

    const fetcher = () => {

        const apiKey = "KC8DOA08XBB9V2TM";
      // if keyword presents means it will starts to fetch
        if (keyword) {
            setLoading(true);
          //loading will be visible until the items is fetched on display
            fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${apiKey}`)
                .then(res => res.json())
                .then(async (res) => {
                    if (res && res.bestMatches && res.bestMatches.length) {
                        let stocks = res.bestMatches.filter((stock) => {
                            return stock;
                        });
                        if (stocks.length) {
                            let _stockList = [];
                            for (let i = 0; i < stocks.length; i++) {
                           //delaying the another fetch for avoiding frequency call by calling two api at a time   
                                await new Promise(resolve => setTimeout(() => resolve(), 1000));
                                let symbol = stocks[i]['1. symbol'];

                                let name = stocks[i]['2. name'];
                                let resp = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`)
                                let data = await resp.json();
                               console.log(data,"data")
                                if (data && data["Time Series (Daily)"] && data["Time Series (Daily)"]["2023-06-30"]) {
                                    let price = data["Time Series (Daily)"]["2023-06-30"]["4. close"];
                                    _stockList.push({ symbol, name, price });
                                }
                            }
                            setStockList(_stockList);
                         
                            setLoading(false);
                        }
                        else alert("No relevant Stocks Found");
                    }
                    else alert("No relevant Stocks Found");
                })
        }
    }

    useEffect(() => {
        fetcher();
    }, [keyword])

    if (!loading) {
        return (
            <div className="card">
                {
                    stockList.map((stock) => {
                      
                        return (
                            <div className="cards" key={stock.symbol}>
                              <h4 style={{fontWeight:"500",color:"gray",letterSpacing:"1px"}}>Name:{stock.name}</h4>
                              <h4 style={{fontWeight:"500",color:"gray",letterSpacing:"1px"}}>Symbol:{stock.symbol}</h4>
                              <h4 style={{fontWeight:"500",color:"palevioletred",letterSpacing:"1px"}}>Stock Price:$ {stock.price}</h4>
                              
                                   <button id="button" onClick={()=>handleClick(stock)}  className="btn btn-info">Add to Watchlist</button>                                                                                         
                               
                                  
                               
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    else {
        return <div  className='loading'style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"250px",fontSize:"40px",color:"gray"}} >LOADING ....</div>
    }
}

export default StockList
