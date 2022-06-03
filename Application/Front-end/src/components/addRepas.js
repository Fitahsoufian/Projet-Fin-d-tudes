import React, {useState}from 'react'
import Form from './layouts/Form';
import Buttom from './layouts/Buttom';
import axios from 'axios';





const AddMeal = () => {
    const[name , setName]= useState("")
    const[description , setDescription]= useState("")
    const[imageFile , setImage]= useState();
    const[prix , setPrice]= useState("")
    
    
  
  
    const handleName = (e)=>{
      return setName(e.target.value)
    }
    const handleDescription = (e)=>{
      return setDescription(e.target.value)
    }
    const handleImage= (e)=>{
      return setImage(e.target.files[0])
       
    }
    const handlePrice = (e)=>{
      return setPrice(e.target.value)
    }
    const API_URL = 'http://localhost:3030/api/createrepas';
    const regesterHandler = async ()=>{
      
      
        // e.prevegntDefault()

      const data = new FormData()
      data.append("name",name)
      data.append("description",description)
      data.append("image",imageFile)
      data.append("prix",prix)

      
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
  <label htmlFor='name'>name</label>
  <input type="text" id='fname' placeholder="Enter Name" value={name} onChange={handleName} />
 </Form.Controller>
 <Form.Controller>
  <label htmlFor='name'>description</label>
  <input type="text" id='lname' placeholder="Enter description" value={description} onChange={handleDescription} />
 </Form.Controller>
 <Form.Controller>
  <label htmlFor='name'>Image</label>
  <input type="file" id='city' placeholder="Enter ur image"  onChange={
    e =>{ setImage(e.target.files[0])
    console.log(e.target.files[0])
    }
  }/>
 </Form.Controller>
 <Form.Controller>
  <label htmlFor='name'>Price</label>
  <input type="text" id='start' placeholder="Enter ur price" value={prix} onChange={handlePrice}/>
 </Form.Controller>
 <Buttom type="submit" style={{ marginRight: '20px' }} onClick={regesterHandler} >add Meal</Buttom>
  </Form>
  );
}
 
export default AddMeal;