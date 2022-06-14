import React, {useState}from 'react';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginAction , setRoleAction , setIdAction } from "../../actions/authActions";
import { useNavigate, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Home/Header';
const SingIn = () => {

const navigate = useNavigate();
 const [data , setData] = useState({
  email : "",
  password : ""
});

  const [submitted, setSubmitted] = useState(false);

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };
  const dispatch = useDispatch();

  const login =(email, password)=> {
   return axios.post(`http://localhost:5000/api/signin`, {
     email: email,
     password: password,
   })
 }

  const handlePassword = (e) => {
    setData({ ...data,password: e.target.value });
  };

  const handleSubmit =()=> {
    login( data.email, data.password).then((response) => {
      (async () => {
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token);

        console.log(localStorage.getItem("token"));
        await dispatch(loginAction());
        await dispatch(setRoleAction(jwtDecode(response.data.token).role));
        await dispatch(setIdAction(jwtDecode(response.data.token).id));
        await navigate('/dashboard')
        
      })()
    });
    setSubmitted(true);
  };

 return ( 
  <div className="">
     <Header/>
   <div className="flex">
    <div className="w-full lg:w-11/12 flex">

     <div style={{borderRadius:"10%" , backgroundColor:" #00004b" ,position:'absolute',zIndex:'1',marginLeft:'350px' , marginTop:'200px' }} className="w-50 lg:w-7/12 ">
      <h3 className="pt-4 text-2xl text-center text-white mb-5">Login !</h3>
      <form className="pt-6 pb-8 mb-4 bg-Black rounded text-center" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }} action ="/Home.js">

       <div style={{ display:'flex',justifyContent:'space-around'}} className="mb-4 md:mb-0">
       <label style={{ marginLeft:"0px"}} className="block mb-2 text-sm font-bold  text-white" htmlFor="password">
          Email :
         </label>
        <input
         className="w-50 px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
         id="email"
         type="email"
         placeholder="Email"
         email={data.email}
         onChange={handleEmail}
        />
       </div>
       <div className="mb-4 md:flex md:justify-between">
        <div style={{ display:'flex',justifyContent:'space-around'}} className="mb-4 md:mr-2 md:mb-0">
         <label style={{ marginLeft:"-17px"}} className="block mb-2 text-sm font-bold  text-white" htmlFor="password">
          Password :
         </label>
         <input 
          className="w-50 px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          password={data.password}
          onChange={handlePassword}
         />
         
        </div>
       </div>
       <div className="mb-6">
        <button
        style={{ fontWeight:"bold" }}
         className="w-full px-4 py-2 font-weight-bold ml-5 rounded-full hover:bg-blue-700"
         type="submit"
        >
         Login Account
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
 
export default SingIn;