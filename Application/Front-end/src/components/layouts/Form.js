import React from 'react'
import styles from './Form.module.css'

const Form = (props)=>{
 return(
 <form onSubmit={props.onSubmit} encType="multipart/form-data" >
  {props.children}
 </form>
 )
}

const Controller = (props) => {
 return (
  <div className={styles.control}>
  {props.children}
 </div> 
 );
}
 // assign controller component to form component
Form.Controller = Controller

export default Form;