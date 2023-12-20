import React from 'react'
import { Link,  } from 'react-router-dom';


const Home = ({setcredentials,credentials}) => {
  //  Here the credentials are initialised 
   setcredentials({
    username:"shubham",
    telephone:"11111111",
   })
   
  return (
    <div>
      {/* On clicking on student the user reaches the '/student' */}
      <Link to='/student'>Student</Link>
      <br/>
      This is Home
      
    </div>
  )
}

export default Home
