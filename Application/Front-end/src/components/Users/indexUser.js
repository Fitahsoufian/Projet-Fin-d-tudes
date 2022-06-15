import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList";
import Model from "../module/Model"
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


export default function Index1() {
  const [users, setUser] = useState([]);
  const [showModul, setShowModul]= useState(false)
  const navigate = useNavigate();


    // const closeModel = ()=> setShowModul(false)
    // const HandleModel = () => setShowModul(true)

  const url = "http://localhost:5000/api/getUsers";
  useEffect(() => {
    const token = localStorage.getItem("token");
    const verify = jwtDecode(token);
    console.log(verify.role);
    if ( verify.role !== 'admin'){
      navigate('/news')
    }
    else{
      console.log(verify);
    }
    getAllUsers();
  }, []);
  const getAllUsers = () => {
    axios.get(url).then((response) => {
        console.log('response',response.data.repas)
        const allUsers = response.data.users;
        setUser(allUsers);
        
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const userHandler = ()=>{
   return users
 }
  
  return (
    <>
   <div className="w-full sm:px-6">
    <div className="px-5 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
     <div className="sm:flex items-center justify-between">
     <p style={{ fontSize:'30px', fontWeight:'bold' }} className="text-base sm:text-lg md:text-xl lg:text-2xl leading-normal text-gray-800">Users</p>
     <button style={{ fontWeight:"bold",backgroundColor:'#00006c',padding:'10px' }} className=" sm:ml-3 mt-4 sm:mt-0 focus:outline-none rounded">
       <FontAwesomeIcon style={{ color:'white' }} icon={ faArrowLeft }/>
         <a style={{ textDecoration: 'none' }} className="link-light p-4" href='/news'>News</a>
          </button>
      <div>
      </div>
    </div>
     </div>
    </div>
    <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
    <table class="table table-hover">
  <thead style={{ backgroundColor:'#001458' ,color:'white' }}>
    <tr>
      <th className="px-5 2xl:px-0" scope="col">Name</th>
      <th className="px-5 2xl:px-0" scope="col">Email</th>
      <th className="px-5 2xl:px-0" scope="col">Number</th>
      <th className="px-5 2xl:px-0" scope="col">Role</th>
      <th className="px-5 2xl:px-0" scope="col">Management</th>
    </tr>
  </thead>
    <UserList userList ={userHandler()}/>
    </table>
   </div>
    </>
  );
}
