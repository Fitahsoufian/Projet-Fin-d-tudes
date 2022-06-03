import React, {useState, useEffect} from 'react'
import axios from 'axios'
import OffreList from './OfferList'



const Offre = () => {
    
    const [repas, setRepas] = useState([])
    


    const [id, setId] = useState()
    const handleId = (e, selectionId) => {
        setId(selectionId)
    }

    const url = "http://localhost:3030/api/getrepas";
  useEffect(() => {
    getAllRepas();
  }, []);
  const getAllRepas = () => {
    axios.get(url).then((response) => {
        console.log('response',response.data.repas)
        const allRepas = response.data.repas ;
        setRepas(allRepas);
        
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

    return(
<div className="container-fluid bg-trasparent my-4 p-3" style={{ position: "relative" }}>
<div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
    <OffreList getAllMeals={repas} handleId={handleId} />
    
</div>
</div>
    )
}

export default Offre;