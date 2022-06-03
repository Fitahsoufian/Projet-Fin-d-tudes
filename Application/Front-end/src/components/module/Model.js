import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import styles from './Model.module.css'
import ReactDOM from 'react-dom';
// import Form from '../Layout/Form';
// import Buttom from '../Layout/Buttom';

// const submitHundler = (e) => {
//    e.preventDefault()
//    console.log(e)
// };
const BackDrop =({close , show})=> <div className={`${styles.backDrop} ${show?styles.showBackdrop:null}`} onClick={close} ></div>
const Overlay =({children,show})=> <div className={`${styles.overlay} ${show?styles.showOverlay:null}`}>
{children}

  
</div>

const Model = ({children, show , close}) => {
 return (
ReactDOM.createPortal(
 <Fragment>
  <BackDrop close={close} show={show}/>
  <Overlay show={show} >
     {children}
  </Overlay>
 </Fragment>,document.getElementById('model')
)
   );
}
 
export default Model;