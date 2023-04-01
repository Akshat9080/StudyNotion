import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {Link, useNavigate} from "react-router-dom"
import {toast} from "react-hot-toast"

const Loginform = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const[formData,setFormData] = useState({
        email:"",password:""
    });
    function changeHandler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    const[showPassword,setShowPassword] = useState(false)
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Log In successfully")
        console.log("Login information")
        console.log(formData)
        navigate("/dashboard")
    }
  return (
    <form onSubmit={submitHandler} className="mt-6 flex flex-col w-full gap-y-4">
        <label className='w-full'>
            <p className='text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
            <input 
                type="email" 
                required 
                value={formData.email}
                name="email"
                onChange={changeHandler}
                placeholder="Enter email address"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
        <label className='relative'>
            <p className='text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p>
            <input 
                type={showPassword ? ("text") : ("password")} 
                required 
                value={formData.password}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span className='absolute cursor-pointer right-3 top-[38px]' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>
            <Link to="#">
            <p className='text-xs text-blue-100 max-w-max ml-auto'>Forget Password</p>
            </Link>
            
        </label>
        <button className='bg-yellow-50 rounded-md text-richblack-800 px-[12px] font-medium py-[8px] mt-6'>Sign In</button>
    </form>
  )
}

export default Loginform