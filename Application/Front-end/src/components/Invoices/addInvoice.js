import React, {useState}from 'react'
import Form from '../layouts/Form';
import Buttom from '../layouts/Buttom';
import axios from 'axios';





const AddInvoice = () => {
    const[number, setNumber]= useState("")
    const[customer_name , setCustomer]= useState("")
    const[amount, setAmount]= useState("");
    const[Statement , setStatement]= useState("")
    
    
  
  
    const handleNumber = (e)=>{
      return setNumber(e.target.value)
    }
    const handleCustomer = (e)=>{
      return setCustomer(e.target.value)
    }
    const handleAmount= (e)=>{
      return setAmount(e.target.value)
       
    }
    const handleStatement = (e)=>{
      return setStatement(e.target.value)
    }
    const API_URL = 'http://localhost:5000/api/createInvoice';
    const regesterHandler = async ()=>{
      
      
      const data = {
      number,
      customer_name,
      amount,
      Statement
      }

      
     try {
       const result = await axios.post(API_URL , data, {
         headers: {
           authorization: `${localStorage.getItem('token')}`
          }
       }).data
       return result
     } catch (error) {
       console.log(error)
     }
     
    }
  
 return ( 
  <Form >
  <Form.Controller>
  <label htmlFor='name'>Number : </label>
  <input type="text" id='fname' placeholder="Number ..." value={number} onChange={handleNumber} />
 </Form.Controller>
 <Form.Controller>
  <label htmlFor='name'>Customer : </label>
  <input type="text" id='lname' placeholder="Customer ..." value={customer_name} onChange={handleCustomer} />
 </Form.Controller>
 <Form.Controller>
  <label htmlFor='name'>Amount : </label>
  <input type="text" id='city' placeholder="Amount ..." value={amount}  onChange={
    handleAmount
  }/>
 </Form.Controller>
 <Form.Controller>
  <label htmlFor='name'>Statement : </label>
  <input type="text" id='start' placeholder="Statement ..." value={Statement} onChange={handleStatement}/>
 </Form.Controller>
 <Buttom type="submit" style={{ marginRight: '20px', backgroundColor:'#00004b',color:'white' }} onClick={regesterHandler} > +add Invoice</Buttom>
  </Form>
  );
}
 
export default AddInvoice;