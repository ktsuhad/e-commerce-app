import productData from "../utils/Data.json";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  return (
    <div>
      <h1 className="text-lg font-bold py-5">For You!</h1>
      {/* Mapping product cards */}
      <div className="flex items-center justify-center gap-5 md:justify-start md:gap-14 flex-wrap">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
