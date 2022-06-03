import React from 'react'
import Repas from './Repas'
const RepasList = ({repasList}) => {
 console.log(repasList)
 const repas = repasList.map(({id , ...otherProps})=> (
  <Repas key={id} {...otherProps} id={id}
   />))
   // return ( 
  
 //  )
 
  return ( 
   <React.Fragment>
  {repas}
    </React.Fragment>
   );
}
 
export default RepasList;