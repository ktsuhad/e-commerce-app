import productData from "../utils/Data.json";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  return (
    <div className="">
      <h1 className="text-lg font-bold py-5">For You!</h1>

      {/* mapping product acrd */}
     <div className="flex items-center justify-center gap-5 md:justify-start md:gap-8 X flex-wrap">
     {
        productData.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))
     }
     </div>
    </div>
  );
};

export default ProductListing;
