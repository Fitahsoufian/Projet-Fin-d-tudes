import React from 'react'
import OffreItem from './OffreItem'


const OffreList = ({getAllMeals, handleId}) => {
  console.log("ggggg",getAllMeals)
 const repas = getAllMeals.map(({id , ...otherProps}) => (
  <OffreItem key={id} {...otherProps} id={id} handleId={handleId}/>
  ))
 
  return ( 
   <React.Fragment>
  {repas}
    </React.Fragment>
   );
}
 
export default OffreList;