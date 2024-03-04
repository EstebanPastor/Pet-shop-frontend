import React, { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import "./products.scss";

import { IProduct } from "../../types/global.types";

import axios from "axios";
import moment from "moment";

import { baseURL } from "../../constants/url.constant";

import { Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

import Swal from "sweetalert2";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const fetchProductsList = async () => {
    try {
      const response = await axios.get<IProduct[]>(baseURL);
      setProducts(response.data);
      if (location?.state) {
        Swal.fire({
          icon: "success",
          title: location.state?.message,
        });
        navigate(location.pathname, { replace: true });
      }
    } catch (error) {
      alert("Error while fetching products list");
    }
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

  const navigateToEditPage = (id: string) => {
    navigate(`/products/edit/${id}`);
  };

  const navigateToDeletePage = (id: string) => {
    navigate(`/products/delete/${id}`);
  };

  return (
    <div className="products">
      <h1>Products list</h1>
      {products.length === 0 ? (
        <h1>No products available</h1>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Brand</th>
                <th>Creation time</th>
                <th>Update time</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.brand}</td>
                  <td>{moment(product.createdAt).fromNow()}</td>
                  <td>{moment(product.updatedAt).fromNow()}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ mx: 3 }}
                      onClick={() => navigateToEditPage(product.id)}
                    >
                      <Edit />
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => navigateToDeletePage(product.id)}
                    >
                      <Delete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Products;
