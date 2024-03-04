import "./home.scss";

import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to Petty</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/products")}
      >
        Product list
      </Button>
      <img src="/kitten.jpg" alt="" />
    </div>
  );
};

export default Home;
