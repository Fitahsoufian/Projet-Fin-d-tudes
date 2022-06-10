import React,{useState} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

function Transaction({id,journal,entitled,debit,credit, HandleMode}) {
    const [show, setShow] = useState(null)
    const [transactions, setTransaction] = useState([])
    
    const deleteHandler = async (e,selectionId)=>{
        console.log(selectionId)
       await axios.delete(`http://localhost:5000/api/deleteTransaction/${selectionId}`)
         .then(res => {
           const del = transactions.filter(e =>e._id !== selectionId)
             setTransaction(del)
  
         })
         window.location('/transactions')
  
     }

    return (
            <>
            <tbody className="w-full">
            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">                        
                        <div className="pl-4">
                            <p className="font-normal">{journal}</p>
                        </div>
                    </div>
                </td>
                <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                        <div className="pl-4">
                            <p className="font-normal">{entitled}</p>
                        </div>
                    </div>
                </td>
                <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                        <div className="pl-4">
                            <p className="font-normal">{debit}</p>
                        </div>
                    </div>
                </td>
                <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                        <div className="pl-4">
                            <p className="font-normal">{credit}</p>
                        </div>
                    </div>
                </td>
                <td className="px-5 mx-2 2xl:px-0">
                <div className="d-block  card-footer">
                    <button className="mr-2 btn-icon btn-icon-only btn btn-outline-success"><i className="pe-7s-pen btn-icon-wrapper"><Link to={"/updateTransaction/"+id} onClick={(e)=> {HandleMode()}} style={{textDecoration: 'none'}} className="text-s w-full text-center cursor-pointer hover:text-black" >
                        </Link></i></button>
                    <button className=" btn-icon btn-icon-only btn btn-outline-danger"><Link to={"/transactions"} onClick={(e)=> {deleteHandler(e,id)}} style={{textDecoration: 'none'}} className="text-s w-full text-center cursor-pointer hover:text-black" >
                    <i className="pe-7s-trash btn-icon-wrapper"></i>
                        </Link></button>
                </div>
                </td>
            </tr>
            </tbody>   
      </>
    );
}

export default Transaction;