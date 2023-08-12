import Banner from "../Components/Banner"; //Banner
import Navbar from "../Components/Navbar"; //Navbar
import ProductListing from "../Components/ProductListing"; //ProductListing

const Home = () => {
  return (
    <div className="container mx-auto px-3">
      <Navbar />
      <Banner />
      <ProductListing />
    </div>
  );
};

export default Home;
