import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./PostList";
import AddPost from "./addPost";
import Model from "../module/Model";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";


export default function Post() {

  const token = localStorage.getItem("token");
  const verify = jwtDecode(token);
  const [posts, setPost] = useState([]);
  const [showModul, setShowModul]= useState(false)
  const [role, setRole]= useState(verify.role)


    const closeModel = ()=> setShowModul(false)
    const HandleModel = () => setShowModul(true)
    const navigate = useNavigate();


  const url = "http://localhost:5000/api/getPosts";
  useEffect(() => {
//     const token = localStorage.getItem("token");
//     const verify = jwtDecode(token);
//     console.log(verify.role);
//     if ( verify.role !== 'admin'){
//       navigate('/home')
//     }
//     else{
// console.log(verify.role);    }
    getAllPosts();
    return () => {
      setPost([]);
    }
  }, []);
  const getAllPosts = () => {
    axios.get(url).then((response) => {
        console.log('response',response.data.Posts)
        const allPosts = response.data.Posts;
        setPost(allPosts);
        
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const postHandler = ()=>{
   return posts
 }
  
  return (
    <>
   <div className="w-full sm:px-6">
    <div className="px-5 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
     <div className="sm:flex items-center justify-between">
     <p style={{ fontWeight:"bold",fontSize:'50px' }}  className="text-base sm:text-lg md:text-xl lg:text-2xl font-bolder leading-normal text-gray-800">News</p>
      <div>

        {role==='admin' && 
        <button onClick={HandleModel} style={{ fontWeight:"bold",backgroundColor:'#00006c',padding:'5px' }} className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-center justify-center  focus:outline-none rounded">
       <p className="text-white m-2">+ Add Post</p>
        </button>
        }

      </div>
    </div>
     </div>
    </div>
    <PostList postList ={postHandler()}/>
  
   <Model show={showModul} close={closeModel}> 
    <AddPost/>
    </Model>
    </>
  );
}
