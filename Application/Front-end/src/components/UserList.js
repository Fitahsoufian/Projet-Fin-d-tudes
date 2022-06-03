import React from 'react'
import User from './User'
const UserList = ({userList}) => {
 console.log(userList)
 const users = userList.map(({id , ...otherProps})=> (
  <User key={id} {...otherProps} id={id}
   />))
   // return ( 
  
 //  )
 
  return ( 
   <React.Fragment>
  {users}
    </React.Fragment>
   );
}
 
export default UserList;