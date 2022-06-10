import React,{useState} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";


function Post({id , title ,tescription , HandleModel}) {
  const token = localStorage.getItem("token");
  const verify = jwtDecode(token);
  const [role, setRole]= useState(verify.role)
  const [posts, setPost] = useState({});
    const deleteHandler = async (e,selectionId)=>{
        console.log(selectionId)
       await axios.delete(`http://localhost:5000/api/deletePost/${selectionId}`)
         .then(res => {
           const del = posts.filter(e =>e._id !== selectionId)
             setPost(del)
  
         })
         window.location('/posts')
  
     }

    return (
            <>
       <div className="d-flex flex-row align-items-center">
       <div className="col-md-4 mb-4  ml-2">
    <div className="w-full">
      <img style={{borderRadius:'50px'}}  src="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=" className="img-fluid" />
      <a href="#!">
        <div className="mask" style={{backgroundColor: 'black' }}></div>
      </a>
    </div>
  </div>
  <div className="">
  <div className="col-md-12 mb-4">
    <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News of the day</span>
    <h4><strong>{title}</strong></h4>
    <p class="text-muted">
     {tescription}
    </p>
    <div className="d-flex flex-row justify-content-between">
    <button type="button" className="btn btn-white"></button>
    <div style={{ marginLeft:'50px', float:'right' }} className="col-md-3">
                     {role==='admin' && 
                    <button className="mr-2 btn-icon btn-icon-only btn btn-outline-success"><i className="pe-7s-pen btn-icon-wrapper"><Link to={"/updateTransaction/"+id} style={{textDecoration: 'none'}} className="text-s w-full text-center cursor-pointer hover:text-black" >
                        </Link></i></button> }
                        {role==='admin' && 
                    <button className=" btn-icon btn-icon-only btn btn-outline-danger"><Link to={"/news"} onClick={(e)=> {deleteHandler(e,id)}} style={{textDecoration: 'none'}} className="text-s w-full text-center cursor-pointer hover:text-black" >
                    <i className="pe-7s-trash btn-icon-wrapper"></i>
                        </Link></button> }
                        </div> 
                        </div>
    </div>
  </div>
</div>              
      </>
    );
}

export default Post;