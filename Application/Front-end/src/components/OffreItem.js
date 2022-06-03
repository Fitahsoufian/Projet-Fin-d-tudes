import React from 'react'

const OffreItem = ({ id, name, prix,image, description}) => {
    
  return (  
    <div className="col">
    <div className="card h-100 shadow-sm"> <img src={"http://localhost:3030/images/"+image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">{name}</span> <span className="float-end price-hp">{prix} DH</span> </div>
            <h5 className="card-title">{description}</h5>
            <div className="text-center my-4"> <a href="#" className="btn btn-warning">Order Now</a> </div>
        </div>
    </div>
</div>
    )
}


export default OffreItem
