import React from 'react'
import frameImage from "../assets/frame.png"
import Signupform from './Signupform'
import Loginform from './Loginform'
import {FcGoogle} from "react-icons/fc"

const Templates = ({title,desc1,desc2,formtype,image,setIsLoggedIn}) => {
  return (
    <div className=' flex w-11/12 max-w-[1160px] py-12 mx-auto justify-between'>
        <div className='w-11/12 max-w-[450px]'>
          <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
          <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-richblack-100'>{desc1}</span>
            <br/>
            <span className='text-blue-100 italic'>{desc2}</span>
          </p>
          {formtype==="signup"? (<Signupform setIsLoggedIn={setIsLoggedIn} />) : (<Loginform setIsLoggedIn={setIsLoggedIn}/>)}
          <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
            <div className='w-full h-[1px] bg-richblack-700'></div>
          </div>
          <button className='w-full flex justify-center items-center font-medium border
           border-richblack-700 px-[12px] py-[8px] gap-x-4 rounded-md mt-6'>
            <FcGoogle className='text-[25px]'/>
            <p className='text-richblack-100'>Sign up with Google</p>
            </button>

        </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frameImage} alt="pattern" width={558} height={504} loading="lazy" />
            <img src={image} alt="student" width={558} height={490} loading="lazy" className='absolute -top-4 right-4'/>
        </div>
    </div>
  )
}

export default Templates
