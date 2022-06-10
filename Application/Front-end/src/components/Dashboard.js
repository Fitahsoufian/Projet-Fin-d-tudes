import React,{useState , useEffect} from "react";
import Transaction from './Transactions/indexTransaction'
import Invoice from './Invoices/indexInvoice'
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { color, fontSize } from "@mui/system";
function Dashboard() {
   const [transaction, setTransaction]=useState(false)
   const [invoice, setInvoice]=useState(false)
   const [section , setSection]=useState(null)

   const handleTransaction =()=>{
        setSection('transaction')
        setTransaction(true)
        setInvoice(false)
   }
   const handleInvoice =()=>{
        setSection('invoice')
        setInvoice(true)
        setTransaction(false)
   }
   const navigate = useNavigate();
   useEffect(() => {
    const token = localStorage.getItem("token");
    const verify = jwtDecode(token);
    console.log(verify.role);
    if ( verify.role === 'comptable'){
      navigate('/dashboard')
    }
    else{
      navigate('/news')
    }
  },[])

 const SlideStyle = {
    position: 'fixed',
    backgroundColor: '#001458',
    height: '100%',
    color : 'white',
    fontWeight: 'bold',
    fontSize: '20px',
}
    return (
        <div className="flex flex-no-wrap ">
            <div className="w-64 absolute sm:relative shadow md:h-full flex-col justify-between hidden sm:flex" >
                <div className="px-8"style={SlideStyle}>
                    <div className="h-16 w-full flex items-center">
                    </div>
                    <ul className="mt-12">
                        <li className="flex justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-4 mt-5">
                            <div style={{cursor:'pointer', backgroundColor: section === 'transaction' ? "#fff" : "transparent" , color: section === 'transaction' ? '#001458' : "white"}}  onClick={handleTransaction} className="flex items-center px-3 py-1 rounded-left">
                                <span className="text-sm  ml-2">Transactions</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6 mt-4">
                            <div style={{ cursor:'pointer', backgroundColor: section === 'invoice' ? "#fff" : "transparent" , color: section === 'invoice' ? '#001458' : "white" }} onClick={handleInvoice} className="flex items-center px-3 py-1 rounded-left">
                                <span className="text-sm  ml-2">Invoices</span>
                            </div>
                        </li>                     
                    </ul>
                </div>
            </div>
            <div style={{ width:'80%' }} className="container mr-5">
               {(transaction==true) && <Transaction/>}
            </div>
            <div style={{ width:'80%' }} className="container mr-5">
               {(invoice==true) && <Invoice/>}
            </div>

        </div>
    );
}

export default Dashboard;