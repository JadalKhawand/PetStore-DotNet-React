import "./home.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Welcome to Pet Store</h1>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate("/products")}
      >
        Products List
      </Button>
      <img src="/images.jpeg" alt="kitten image" />
    </div>
  );
};

export default Home;
