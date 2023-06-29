import React,{useState,useEffect} from 'react'

import {useSelector} from 'react-redux'

const StockList = () => {
    const keyword=useSelector((state)=>state.user.searchList)  
   console.log(keyword,"key")
useEffect(()=>{

const apiKey = "DGXSDU684MRU5A9H";


fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${apiKey}`)
    .then(res => res.json())
    .then(async (res) => {

        if (res && res.bestMatches && res.bestMatches.length) {
            let stocks = res.bestMatches.filter((stock) => {
                return !stock['1. symbol'].includes('.');
            });
            if (stocks.length) {
                for (let i = 0; i < stocks.length; i++) {
                    await new Promise(resolve => setTimeout(() => resolve(), 1000));
                    let symbol = stocks[i]['1. symbol'];
                    let name = stocks[i]['2. name'];
                    let resp = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`)
                    let data = await resp.json();
                    if (data && data["Time Series (Daily)"] && data["Time Series (Daily)"]["2023-06-26"]) {
                        let price = data["Time Series (Daily)"]["2023-06-26"]["4. close"];
                        console.log(symbol, name, price)
                    }
                }
            }
            else console.log("No relevant Stocks Found");
        }
        else console.log("No relevant Stocks Found");
    })

},[])

  return (
    <div>

       

       

    </div>
  )
}

export default StockList