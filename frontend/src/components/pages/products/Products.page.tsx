import { useState } from "react";
import "./products.scss";
import { IProduct } from "../../../types/global.typing";
const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  return (
    <div className="products">
      <h1>Products List</h1>
    </div>
  );
};

export default Products;
