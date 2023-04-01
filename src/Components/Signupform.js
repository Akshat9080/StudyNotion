import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

const Signupform = ({setIsLoggedIn}) => {

const[formData,setFormData]=useState({
    firstname:"",lastname:"",email:"",password:"",confirmpassword:""
})

const navigate = useNavigate()

const[showPassword,setShowPassword] = useState(false)
const[showConfirmPassword,setShowConfirmPassword] = useState(false)
const[accountType,setAccountType] =useState("student")

function changeHandler(event){
    setFormData((prevData) => (
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ))
}

function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmpassword){
        toast.error("Password not match")
        return 
    }


        setIsLoggedIn(true)
        toast.success("Account Created")
        const accountData = {
            ...formData
        }
        const finalData = {
            ...accountData,accountType
        }
        console.log(finalData);
        navigate("/dashboard")

}

  return (
    <div>
        <div className='flex bg-richblack-800 gap-x-1 rounded-full max-w-max relative'>
            <button onClick={() => {
                setAccountType("student")
            }} className={`${accountType==="student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-full`}>
                Student
            </button>
            <button className={`${accountType==="instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-full`} onClick={() => {
                setAccountType("instructor")
            }}>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            <div className='flex gap-x-4 mb-3'>
            <label className='w-full'>
                <p className='text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter First Name"
                  onChange={changeHandler}
                  value={formData.firstname}
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
            <label className='w-full'>
                <p className='text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter Last Name"
                  onChange={changeHandler}
                  value={formData.lastname}
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
            </div>
            <label className='w-full '>
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
            <div className='flex gap-x-4 mb-3 mt-[20px]'>
            <label className='w-full relative'>
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
            
        </label>
        <label className='w-full relative'>
            <p className='text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
            <input 
                type={showConfirmPassword ? ("text") : ("password")} 
                required 
                value={formData.confirmpassword}
                name="confirmpassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span className='absolute cursor-pointer right-3 top-[38px]' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>
            
        </label>
            </div>
           <button className='w-full bg-yellow-50 rounded-md text-richblack-800 px-[12px] font-medium py-[8px] mt-6'>
            Create Account
           </button>
        </form>
    </div>
  )
}

export default Signupform