import React, {useState}from 'react'
import Form from '../layouts/Form';
import Buttom from '../layouts/Buttom';
import axios from 'axios';





const AddTransaction = () => {
    const[journal, setJournal]= useState("")
    const[entitled , setEntitled]= useState("")
    const[debit , setDebit]= useState("");
    const[credit , setCredit]= useState("")
    
    
  
  
    const handleJournal = (e)=>{
      return setJournal(e.target.value)
    }
    const handleEntitled = (e)=>{
      return setEntitled(e.target.value)
    }
    const handleDebit= (e)=>{
      return setDebit(e.target.value)
       
    }
    const handleCredit = (e)=>{
      return setCredit(e.target.value)
    }
    const API_URL = 'http://localhost:5000/api/createTransaction';
    const regesterHandler = async ()=>{
      
      
        // e.prevegntDefault()

      const data = {
      journal,
      entitled,
      debit,
      credit
      }

      
     try {
       const result = await axios.post(API_URL , data).data
       return result
     } catch (error) {
       console.log(error)
     }
     
    }
  
 return ( 
  <Form >
  <Form.Controller>
  <label htmlFor='name'>Journal : </label>
  <input type="text" id='fname' placeholder="Journal ..." value={journal} onChange={handleJournal} />
 </Form.Controller>
 <Form.Controller>
  <label htmlFor='name'>Entitled : </label>
  <input type="text" id='lname' placeholder="Entitled ..." value={entitled} onChange={handleEntitled} />
 </Form.Controller>
 <Form.Controller>
  <label htmlFor='name'>Debit : </label>
  <input type="text" id='city' placeholder="Debit ..." value={debit}  onChange={
    handleDebit
  }/>
 </Form.Controller>
 <Form.Controller>
  <label htmlFor='name'>Credit : </label>
  <input type="text" id='start' placeholder="Credit ..." value={credit} onChange={handleCredit}/>
 </Form.Controller>
 <Buttom type="submit" style={{ marginRight: '20px', backgroundColor:'#00004b',color:'white' }} onClick={regesterHandler} > +add Transaction</Buttom>
  </Form>
  );
}
 
export default AddTransaction;