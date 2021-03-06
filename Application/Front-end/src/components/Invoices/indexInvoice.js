import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux"
import axios from "axios";
import InvoiceList from "./InvoiceList";
import AddInvoice from "./addInvoice";
import Model from "../module/Model"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export default function Invoice() {
  const [invoices, setInvoice] = useState([]);
  const [showModul, setShowModul]= useState(false)
  const token = localStorage.getItem("token")



    const closeModel = ()=> setShowModul(false)
    const HandleModel = () => setShowModul(true)

  const url = `http://localhost:5000/api/getInvoices`;
  useEffect(() => {
    getAllInvoices();
  }, []);
  const getAllInvoices = () => {
    axios.get(url, {
      headers: {
        Authorization: `${token}`
      },
    } ).then((response) => {
      if(response.data.invoices){
        console.log('response',response.data.invoices)
        const allInvoices = response.data.invoices;
        setInvoice(allInvoices);
      }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const invoiceHandler = ()=>{
   return invoices
 }
  
  return (
    <>
   <div className="w-full sm:px-6">
    <div className="px-5 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
     <div className="sm:flex items-center justify-between">
     <p style={{ fontWeight:"bold",fontSize:'50px' }}  className="text-base sm:text-lg md:text-xl lg:text-2xl font-bolder leading-normal text-gray-800">Invoices</p>
     <button style={{ position:'absolute',right:'100px', fontWeight:"bold",backgroundColor:'#00006c',padding:'10px' }} className=" sm:ml-3 mt-4 sm:mt-0 focus:outline-none rounded">
     <FontAwesomeIcon style={{ color:'white' }} icon={ faArrowRight }/>
       <a style={{ textDecoration: 'none' }} className="link-light p-4" href='/news'>News</a>
        </button>
      <div>
      <button onClick={HandleModel} style={{ fontWeight:"bold",backgroundColor:'#00006c',padding:'10px' }} className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-center justify-center  focus:outline-none rounded">
       <p className="text-white">+ Add Invoice</p>
        </button>
      </div>
    </div>
     </div>
    </div>
    <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
    <table class="table table-hover">
  <thead style={{ backgroundColor:'#00006c'}}>
    <tr>
      <th className="px-5 2xl:px-0 text-white" scope="col">Number</th>
      <th className="px-5 2xl:px-0 text-white" scope="col">Customer</th>
      <th className="px-5 2xl:px-0 text-white" scope="col">Amount</th>
      <th className="px-5 2xl:px-0 text-white" scope="col">Statement</th>
      <th className="px-5 2xl:px-0 text-white" scope="col">Management</th>
    </tr>
  </thead>
    <InvoiceList invoiceList ={invoiceHandler()}/>
    </table>
   </div>

   <Model show={showModul} close={closeModel}> 
    <AddInvoice />
    </Model>
    </>
  );
}
