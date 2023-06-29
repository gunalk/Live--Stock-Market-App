import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import StockList from './Components/Pages/StockList/StockList'
import WatchList from './Components/Pages/WatchList/WatchList'
import Navbar from './Components/Navbar/Navbar'

export default function Router() {
  return (
   <div>
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/" element={<StockList/>}/>
         <Route path="/watchlist" element={<WatchList/>}/>
       </Routes>
     </BrowserRouter>
   </div>
  )
}
