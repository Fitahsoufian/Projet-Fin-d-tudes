import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
// import Dashboard from "./components/dashboardAdmin"
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp"
import Transaction from "./components/Transactions/indexTransaction";
import Invoice from "./components/Invoices/indexInvoice";
import Index1 from "./components/indexUser"
import Offre from "./components/offers"
import {useSelector} from 'react-redux'
import AddTransaction from "./components/Transactions/addTransaction";
import UpdateMeal from "./components/Transactions/updateTransaction";
function App() {
  const authenticated = useSelector(state => state.authenticated);
  const role = useSelector(state => state.role);
  return (
    <div className="root">
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/transactions" element={<Transaction/>} />
        <Route path="/invoices" element={<Invoice/>} />
        <Route path="/users" element={<Index1 />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createTransaction" element={<AddTransaction/>} />
        <Route path="/updateMeal/:id" element={ <UpdateMeal/> } />
      </Routes>
    </div>
  );
}

export default App;
