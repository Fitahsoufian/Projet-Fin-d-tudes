import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Dashboard from "./components/dashboardAdmin"
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp"
import Index from "./components/indexRepas"
import Index1 from "./components/indexUser"
import Offre from "./components/offers"
import {useSelector} from 'react-redux'
import AddMeal from "./components/addRepas";
import UpdateMeal from "./components/updateRepas";
function App() {
  const authenticated = useSelector(state => state.authenticated);
  const role = useSelector(state => state.role);
  return (
    <div className="root">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/repas" element={<Index />} />
        <Route path="/offers" element={<Offre />} />
        <Route path="/users" element={<Index1 />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createMeal" element={<AddMeal/>} />
        <Route path="/updateMeal/:id" element={ <UpdateMeal/> } />
      </Routes>
    </div>
  );
}

export default App;
