import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"
import About from '../pages/About'
import Contact from '../pages/Contact'

const Navbar = (props) => {
  let isloggedIn = props.isloggedIn;
  let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className='flex gap-x-6 text-white'>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/contact" >Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='flex items-center gap-x-4'>
        {!isloggedIn &&
          <Link to="/login">
            <button className='bg-richblack-800 text-richblack-100 rounded-[8px] py-[8px] px-[12px] border border-richblack-700'>
              Log In</button>
          </Link>
        }
        {!isloggedIn &&
          <Link to="/signup">
          <button className='bg-richblack-800 text-richblack-100 rounded-[8px] py-[8px] px-[12px] border border-richblack-700'>Sign Up</button>
        </Link>
        }
        {isloggedIn &&
          <Link to="/">
          <button onClick={() =>{
            setIsLoggedIn(false)
            toast.success("Log Out Successfully")
          }} className='bg-richblack-800 text-richblack-100 rounded-[8px] py-[8px] px-[12px] border border-richblack-700'>Log Out</button>
        </Link>
        }
        {isloggedIn &&
          <Link to="/dashboard">
          <button className='bg-richblack-800 text-richblack-100 rounded-[8px] py-[8px] px-[12px] border border-richblack-700'>Dashboard</button>
        </Link>
        }
      </div>
    </div>
  )
}

export default Navbar