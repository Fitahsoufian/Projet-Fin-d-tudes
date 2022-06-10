import React, {useState}from 'react'
import Form from '../layouts/Form';
import Buttom from '../layouts/Buttom';
import axios from 'axios';





const AddPost = () => {
    const[title, setTitle]= useState("")
    const[tescription , setDescription]= useState("")
    
    
  
  
    const handleTitle = (e)=>{
      return setTitle(e.target.value)
    }
    const handleDescription = (e)=>{
      return setDescription(e.target.value)
    }
    const API_URL = 'http://localhost:5000/api/createPost';
    const regesterHandler = async ()=>{
      
      
        // e.prevegntDefault()

      const data = {
      title,
      tescription,
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
  <label htmlFor='name'>Title : </label>
  <input type="text" id='title' placeholder="Title ..." value={title} onChange={handleTitle} />
 </Form.Controller>
 <Form.Controller>
  <label htmlFor='name'>Description: </label>
  <input type="text" id='description' placeholder="Description ..." value={tescription} onChange={handleDescription} />
 </Form.Controller>
 <Buttom type="submit" style={{ marginRight: '20px', backgroundColor:'#00004b',color:'white' }} onClick={regesterHandler} > +add Post</Buttom>
  </Form>
  );
}
 
export default AddPost;