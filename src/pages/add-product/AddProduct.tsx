import React, { useState } from "react";
import "./add-products.scss";

import { TextField, Button } from "@mui/material";
import { IProduct } from "../../types/global.types";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../constants/url.constant";

const AddProduct: React.FC = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState<Partial<IProduct>>({
    title: "",
    brand: "",
  });

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

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
      .post(baseURL, data)
      .then((response) =>
        navigate("/products", {
          state: { message: "Product added successfully" },
        })
      )
      .catch((error) => alert("Error while adding product"));
  };

  const handleBackButtonClick = () => {
    navigate("/products");
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
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

export default AddProduct;
