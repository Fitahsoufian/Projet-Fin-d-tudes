import React, {useState, useEffect} from "react";
import axios from "axios";
// import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";

const UpdateMeal = () => {

 const {id} = useParams();
 const [values, setValues] = useState({
   name: "",
   description: "",
   image: "",
   prix:""
 });

 const [repas , setRepas] = useState({});
 // const [gender , setGender] = useState('male');
 // const [role , setRole] = useState('customer');
 const getMealById = async(repasId)=>{
  let res = await axios.get(`http://localhost:3030/api/getrepas/${repasId}`);
  return res;
 }


 const updateMeal = async(repasId,val) =>{
  await axios.put(`http://localhost:2000/api/updaterepas/${repasId}`, {
    // data: {
        ...val
    // }
    
}).then((res) =>console.log("Data: ", res.data));
 }
 useEffect( () => {
   (async () => {
     await getMealById(id).then((repas) => {
       setRepas(repas)
       console.log(repas.name)
       setValues({...values, name: repas.name, description: repas.description , image: repas.image ,prix: repas.prix })
     });
   })();
 }, []);

 const [errors, setErrors] = useState({});

 const [submitted, setSubmitted] = useState(false);

 const [valid, setValid] = useState(false);

 const handleName = (e) => {
   setValues({ ...values, name: e.target.value });
 };
 const handleDescription = (e) => {
  setValues({ ...values, description: e.target.value });
};

 const handleImage = (e) => {
   setValues({ ...values, image: e.target.value });
 };

 const handlePrice = (e) => {
    setValues({ ...values,prix : e.target.value });
  };

 const handleErrors = (errors) => {
   setErrors({ ...errors });
 };

 const getUpdatedValues = (values) => {
   let res = {};
   Object.keys(values).map(key => {
     if (values[key] !== "") {
       res[key] = values[key];
     }
   })
   return res;
 }

 const handleSubmit = async (e) => {
  e.preventDefault();
  getUpdatedValues(values);
  console.log(getUpdatedValues(values))
  await updateMeal(id, getUpdatedValues(values))
  window.location = "/repas";
  setSubmitted(true);
 };

 if (repas.prix !== 200) {
   return (<div>loading...</div>)
 }else {
   return (
     <div className="container mt-5">
       {/* {console.log(role , gender)} */}
       <div className="row">
         <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
           <div className="card z-index-0">
             <div className="card-header text-center pt-4">
               <h5>Update Meal</h5>
             </div>
             <div className="card-body">
               <form
                 role="form text-left"
                 method="POST"
                 action=""
                 onSubmit={handleSubmit}
               >
                 <div className="mb-3">
                   <input
                     type="text"
                     className="form-control"
                     placeholder="fName"
                     aria-label="Name"
                     aria-describedby="email-addon"
                     name="firstName"
                     id="firstName"
                     value={values.name}
                     onChange={handleName}
                   />
                 </div>
                 <div className="mb-3">
                   <input
                     type="text"
                     className="form-control"
                     placeholder="Name"
                     aria-label="Name"
                     aria-describedby="email-addon"
                     name="lastName"
                     id="lastName"
                     value={values.description}
                     onChange={handleDescription}
                   />
                 </div>
                 <div className="mb-3">
                   <input
                     type="email"
                     className="form-control"
                     placeholder="Email"
                     aria-label="Email"
                     aria-describedby="email-addon"
                     name="email"
                     id="email"
                     value={values.image}
                     onChange={handleImage}
                   />
                 </div>
                 <div className="mb-3">
                   <input
                     type="email"
                     className="form-control"
                     placeholder="Email"
                     aria-label="Email"
                     aria-describedby="email-addon"
                     name="email"
                     id="email"
                     value={values.prix}
                     onChange={handlePrice}
                   />
                 </div>
                 <div className="text-center">
                   <button
                     type="submit"
                     className="btn bg-gradient-dark w-100 my-4 mb-2"
                   >
                     Update Meal
                   </button>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
};

export default UpdateMeal;