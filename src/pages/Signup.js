import React from 'react'
import Templates from '../Components/Templates'
import signupImg from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
   
      <Templates
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
   
  )
}

export default Signup