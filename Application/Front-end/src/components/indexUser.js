import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList";
import Model from "./module/Model"


export default function Index1() {
  const [users, setUser] = useState([]);
  const [showModul, setShowModul]= useState(false)


    // const closeModel = ()=> setShowModul(false)
    // const HandleModel = () => setShowModul(true)

  const url = "http://localhost:3030/api/getusers";
  useEffect(() => {
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
     <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Users</p>
      <div>
      {/* <button onClick={HandleModel} style={{ fontWeight:"bold" }} className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start  bg-warning justify-start px-3 py-1  focus:outline-none rounded">
       <p className="text-sm font-medium leading-none text-black">+ Add Meal</p>
        </button> */}
      </div>
    </div>
     </div>
    </div>
    <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
    <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th className="px-5 2xl:px-0" scope="col">Name</th>
      <th className="px-5 2xl:px-0" scope="col">Email</th>
      <th className="px-5 2xl:px-0" scope="col">Number</th>
      <th className="px-5 2xl:px-0" scope="col">Management</th>
    </tr>
  </thead>
    <UserList userList ={userHandler()}/>
    </table>
   </div>

   {/* <Model show={showModul} close={closeModel}> 
    <AddMeal />
    </Model> */}
    </>
  );
}




{/* <h1>testttttttttttt</h1>
      {hotels.map((hotel, key) => {
        return (
          <div key={key}>
            <div>{hotel.name}</div>
          </div>
        );
      })} */}