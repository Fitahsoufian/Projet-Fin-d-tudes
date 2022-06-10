import React, {useState} from 'react'
import Post from './Post'
import  Modal  from "./modal";
import Model from "../module/Model";



const PostList = ({postList}) => {
 const posts = postList.map(({id , ...otherProps})=> (
  <Post key={id} {...otherProps} id={id}
   />))
   
 
  return ( 
   <React.Fragment> 
  {posts}
    </React.Fragment>
   );
}
 
export default PostList;