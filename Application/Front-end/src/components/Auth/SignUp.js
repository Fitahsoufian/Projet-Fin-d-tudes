import React , {useState} from 'react';
// import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate, Route } from "react-router-dom";
import {showErrMsg, showSuccessMsg} from '../../components/utils/notification/notifications'
import Header from '../Home/Header';
const SingUp = () => {
  const[name , setName]= useState("")
  const[email , setEmail]= useState("")
  const[password , setPassword]= useState("")
  const [number, setNumber] = useState('')
  const [success, setSuccess] = useState('')

  const navigate = useNavigate();

  const handleName = (e)=>{
    return setName(e.target.value)
  }
 
  const handleEmail = (e)=>{
    return setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    return setPassword(e.target.value)
  }
  const handleNumber = (e)=>{
    return setNumber(e.target.value)
  }
  const API_URL = 'http://localhost:5000/api/signup';
  const regesterHandler = async ()=>{
    const 
    _user={
     name,
      email,
      password,
      number
    }
   try {
     const result = await axios.post(API_URL , _user)
     console.log(result)
     setSuccess(result.data.msg)
     await navigate('/signin')
   } catch (error) {
     console.log(error)
   }
  }
 return ( 
   // Container
   <div className="">
     <Header/>
   <div className="flex">
    <div className="w-full lg:w-11/12 flex">

     <div style={{borderRadius:"10%" , backgroundColor:" #00004b" ,position:'absolute',zIndex:'1',marginLeft:'350px' , marginTop:'150px' }} className="w-50 lg:w-7/12 ">
      <h3 className="pt-4 text-2xl text-center text-white mb-5">Create an Account!</h3>
      {/* {err && showErrMsg(err)} */}
            {success && showSuccessMsg(success)}
      <form className="pt-6 pb-8 mb-4 bg-Black rounded text-center">
       <div className="mb-4 md:flex">
        <div style={{ display:'flex',justifyContent:'space-around'}} className="mb-4 md:mb-0">
         <label style={{ marginLeft:"-10px"}}className="block mb-2 text-sm font-bold text-white" htmlFor="firstName">
          Name : 
         </label>
         <input
          className="w-50 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="Name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
         />
        </div>
       </div>
       <div style={{ display:'flex',justifyContent:'space-around'}} className="mb-4 md:mb-0">
       <label style={{ marginLeft:"-10px"}} className="block mb-2 text-sm font-bold  text-white" htmlFor="password">
          Email :
         </label>
        <input
         className="w-50 px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
         id="email"
         type="email"
         placeholder="Email"
         value={email}
         onChange={handleEmail}
        />
       </div>
       <div className="mb-4 md:flex md:justify-between">
        <div style={{ display:'flex',justifyContent:'space-around'}} className="mb-4 md:mr-2 md:mb-0">
         <label style={{ marginLeft:"-10px"}} className="block mb-2 text-sm font-bold  text-white" htmlFor="password">
          Password :
         </label>
         <input 
          className="w-50 px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          value={password}
          onChange={handlePassword}
         />
         
        </div>
        <div style={{ display:'flex',justifyContent:'space-around'}}className="mb-4 md:mb-0">
        <label style={{ marginLeft:"-10px"}} className="block mb-2 text-sm font-bold  text-white" htmlFor="password">
          Number :
         </label>
         <input
          className="w-50 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="password"
          type="text"
          placeholder="+212"
          value={number}
          onChange={handleNumber}
         />
        
        </div>
       </div>
       <div className="mb-6">
        <button
        style={{ fontWeight:"bold" }}
         className="w-full px-4 py-2 font-weight-bold ml-5 rounded-full hover:bg-blue-700"
         type="button"
         onClick={regesterHandler}
        >
         Register Account
        </button>
       </div>
       <hr className="mb-6 border-t" />
       <div className="text-center">
        <a
        style={{ color:'white',textDecoration:'none' }}
         className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
         href="#"
        >
         Forgot Password?
        </a>
       </div>
       {/* <div className="text-center">
        <Link
         className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
         to="/singIn"
        >
         Already have an account? Login!
        </Link>
       </div> */}
      </form>
     </div>
    </div>
   </div>
   <img
             src="https://www.freshbooks.com/wp-content/uploads/cost-accounting.jpg.optimal.jpg"
              className="deliveryPic"
            />
  </div>
  );
}
 
export default SingUp ;