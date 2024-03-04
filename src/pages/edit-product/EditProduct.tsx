import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./edit-product.scss";

import { Button, TextField } from "@mui/material";
import { IProduct } from "../../types/global.types";

import axios from "axios";

import { baseURL } from "../../constants/url.constant";

const EditProduct: React.FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios.get<IProduct>(`${baseURL}/${id}`).then((response) =>
      setProduct({
        title: response.data.title,
        brand: response.data.brand,
      })
    );
  }, [id]);

  const handleSaveButtonClick = () => {
    if (product.title === "" || product.brand === "") {
      alert("Please fill all the fields");
      return;
    }
    const data: Partial<IProduct> = {
      brand: product.brand,
      title: product.title,
    };
    axios
      .put(`${baseURL}/${id}`, data)
      .then((response) =>
        navigate("/products", {
          state: { message: "Product updated successfully" },
        })
      )
      .catch((error) => alert("Error while updating product"));
  };

  const handleBackButtonClick = () => {
    navigate("/products");
  };

  const [product, setProduct] = useState<Partial<IProduct>>({
    title: "",
    brand: "",
  });
  return (
    <div className="edit-product">
      <h2>Edit Product</h2>
      <TextField
        autoComplete="off"
        label="Brand"
        variant="outlined"
        name="brand"
        value={product.brand}
        onChange={changeInputHandler}
      />
      <TextField
        autoComplete="off"
        label="Title"
        variant="outlined"
        name="title"
        value={product.title}
        onChange={changeInputHandler}
      />
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveButtonClick}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleBackButtonClick}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default EditProduct;
