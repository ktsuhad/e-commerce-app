import Banner from "../Components/Banner";  //Banner
import Navbar from "../Components/Navbar";  //Navbar
import ProductListing from "../Components/ProductListing";
import productData from "../utils/Data.json";

const Home = () => {
console.log(productData);

  return (
    <div className="container mx-auto px-3">
      <Navbar />
      <Banner/>
      <ProductListing/>
    </div>
  );
};

export default Home;
