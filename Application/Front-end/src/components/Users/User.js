import React,{useState} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
function User({id,name,email,number,role,HandleMode}) {
    const [users, setUser] = useState([])
    
    const roleUser = async(e,selectionId)=>{
        try {
            await axios.get(`http://localhost:5000/api//updateRole/${selectionId}`)
            .then(res => {
                const up = users.filter(e =>e._id !== selectionId)
                  setUser(up)
              })

            alert("role is changed!");
        } catch (e) {
            console.error(e);
        }
        }

    const deleteHandler = async (e,selectionId)=>{
        console.log(selectionId)
       await axios.delete(`http://localhost:5000/api/deleteuser/${selectionId}`)
         .then(res => {
           const del = users.filter(e =>e._id !== selectionId)
             setUser(del)
  
         })
         window.location('/users')
  
     }

    return (
        <>
                <tbody className="w-full bg-white">
            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">                        
                        <div className="pl-4">
                            <p className="font-normal">{name}</p>
                        </div>
                    </div>
                </td>
                <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                        <div className="pl-4">
                            <p className="font-normal">{email}</p>
                        </div>
                    </div>
                </td>
                <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                        <div className="pl-4">
                            <p className="font-normal">{number}</p>
                        </div>
                    </div>
                </td>
                <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                        <div className="pl-4">
                            <p className="font-normal">{role}</p>
                        </div>
                    </div>
                </td>
                <td className="px-5 mx-2 2xl:px-0">
                <div className="card-footer d-flex justify-content-around w-50">
                <button className=" btn-icon btn-icon-only btn btn-outline-success"><Link to={"/users"} onClick={(e)=> {roleUser(e,id)}} style={{textDecoration: 'none'}} className="text-s w-full text-center cursor-pointer hover:text-black" >
                    <i className="pe-7s-check btn-icon-wrapper"></i>
                        </Link></button>
                    <button className=" btn-icon btn-icon-only btn btn-outline-danger"><Link to={"/users"} onClick={(e)=> {deleteHandler(e,id)}} style={{textDecoration: 'none'}} className="text-s w-full text-center cursor-pointer hover:text-black" >
                    <i className="pe-7s-trash btn-icon-wrapper"></i>
                        </Link></button>
                </div>
                </td>
            </tr>
                    
      </tbody>
        </>
    );
}

export default User;