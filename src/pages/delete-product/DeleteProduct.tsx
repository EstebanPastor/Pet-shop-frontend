import "./delete-product.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { IProduct } from "../../types/global.types";

import axios from "axios";

import { baseURL } from "../../constants/url.constant";

const DeleteProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleDeleteButtonClick = () => {
    axios
      .delete(`${baseURL}/${id}`)
      .then((response) =>
        navigate("/products", {
          state: { message: "Product deleted successfully" },
        })
      )
      .catch((error) => alert("Error while updating product"));
  };

  const handleBackButtonClick = () => {
    navigate("/products");
  };

  return (
    <div className="delete-product">
      <h2>Delete Product</h2>
      <h4>Are you sure you want to delete this product?</h4>

      <div>
        <Button
          variant="contained"
          color="error"
          onClick={handleDeleteButtonClick}
        >
          Delete it
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

export default DeleteProduct;
