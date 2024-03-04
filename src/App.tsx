import NavBar from "./components/ui/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import AddProduct from "./pages/add-product/AddProduct";
import EditProduct from "./pages/edit-product/EditProduct";
import DeleteProduct from "./pages/delete-product/DeleteProduct";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
            <Route path="delete/:id" element={<DeleteProduct />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
