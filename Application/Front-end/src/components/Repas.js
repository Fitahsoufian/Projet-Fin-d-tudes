import React,{useState} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

function Repas({id,name,image,description,prix, HandleMode}) {
    const [show, setShow] = useState(null)
    const [repas, setRepas] = useState([])
    
    const deleteHandler = async (e,selectionId)=>{
        console.log(selectionId)
       await axios.delete(`http://localhost:3030/api/deleterepas/${selectionId}`)
         .then(res => {
           const del = repas.filter(e =>e._id !== selectionId)
             setRepas(del)
  
         })
         window.location('/repas')
  
     }

    return (
        <>
            <tbody className="w-full">
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
                            <p className="font-normal">{description}</p>
                        </div>
                    </div>
                </td>
                <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                        <div className="pl-4">
                            <p className="font-normal"></p>
                        </div>
                    </div>
                </td>
                <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                        <div className="pl-4">
                            <p className="font-normal">{prix}</p>
                        </div>
                    </div>
                </td>
                <td className="px-5 mx-2 2xl:px-0">
                <div className="d-block  card-footer">
                    <button className="mr-2 btn-icon btn-icon-only btn btn-outline-success"><i className="pe-7s-pen btn-icon-wrapper"><Link to={"/updateMeal/"+id} onClick={(e)=> {HandleMode()}} style={{textDecoration: 'none'}} className="text-s w-full text-center cursor-pointer hover:text-black" >
                        </Link></i></button>
                    <button className=" btn-icon btn-icon-only btn btn-outline-danger"><Link to={"/repas"} onClick={(e)=> {deleteHandler(e,id)}} style={{textDecoration: 'none'}} className="text-s w-full text-center cursor-pointer hover:text-black" >
                    <i className="pe-7s-trash btn-icon-wrapper"></i>
                        </Link></button>
                </div>
                </td>
            </tr>
                    
      </tbody>
        </>
    );
}

export default Repas;