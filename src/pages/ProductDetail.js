import { useParams } from "react-router-dom";
import { PRODUCTS } from "./Products";

function ProductDetailPage() {
  const params = useParams();

  const product = PRODUCTS.find((product) => product.id === params.productId);

  return (
    <>
      <h1>Product Detail</h1>
      <p>{product.title}</p>
    </>
  );
}

export default ProductDetailPage;
