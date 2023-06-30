import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import {IoSearch} from "react-icons/io5"
import "./Navbar.css"
import { addToSearchList } from '../../store/slice'
import {FaBars,FaTimes} from "react-icons/fa"


const Navbar = () => {
  const[input,setInput]=useState()
  const dispatch=useDispatch()  
  const navigate=useNavigate()
  const[click,setClick]=useState(false)
    const handleClick2=()=>{
        setClick(!click)
    }
  const handleClick=()=>{
    dispatch(addToSearchList(input))
  }
  return (
    <div className="navbar-container">
      <div className='hamburger'onClick={handleClick2}>
            {click ? (<FaTimes size={30} style={{color:"#fff", marginTop:"15px"}}/>):(  <FaBars size={30} style={{color:"#fff",marginTop:"15px"}}/>)}
       
        </div>
      <div className= {click ? "title active":"title"}>
  
        <h3  style={{fontWeight:"700"}}onClick={()=>navigate("/")}>STOCKS</h3>
        <h3  style={{fontWeight:"700"}} onClick={()=>navigate("/watchlist")}>WATCHLIST</h3>
      </div>
      <div className="input">
        <input onChange={(e)=>setInput(e.target.value)} id="input-box" className="form-control" type="text" placeholder='search for  company name,keyword'/>
        <button onClick={handleClick}className='searchbtn'>
            <IoSearch/>
        </button>
      </div>
    </div>
  )
}

export default Navbar