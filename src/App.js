import "./App.css";
import Footer from "./Component/Footer";
import Logout from "./Component/Logout";
import Main from "./Component/Main";
import Master from "./Component/Master";
import Sidemenu from "./Component/Sidemenu";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import AddCategories from "./Component/AddCategories";
import AddCategories_db from "./Component/AddCategories_db";
import ManageCategories_db from "./Component/ManageCategories_db";
import AddProduct from "./Component/AddProduct";
import ManageProduct from "./Component/ManageProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Dashboard" element={<Master />} />
        <Route path="AddCategories" element={<AddCategories />} />
        <Route path="AddCategories_db" element={<AddCategories_db />} />
        <Route path="ManageCategories_db" element={<ManageCategories_db />} />
        <Route path="AddProduct" element={<AddProduct />} />
        <Route path="ManageProduct" element={<ManageProduct />} />
      </Routes>
    </>
  );
}

export default App;
