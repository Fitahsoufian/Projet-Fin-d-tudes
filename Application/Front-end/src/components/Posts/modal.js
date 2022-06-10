import React,{useState ,useEffect} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

function Modal({id , title,tescription , HandleMode}) {
    const [post, setPost] = useState({});
    const url = "http://localhost:5000/api/getPost/"+id;
  useEffect(() => {
    getOnePost();
    return () => {
        setPost({});
    }
  }, [id]);
  const getOnePost = () => {
    axios.get(url).then((response) => {
        console.log(id);
        const Post= response.data;
        setPost(Post);
        
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
    return (
    <p className=""></p>
  )};
  export default Modal;
