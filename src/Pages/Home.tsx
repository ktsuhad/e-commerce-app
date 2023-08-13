import Banner from "../Components/Banner"; //Banner
import Footer from "../Components/Footer"; //Footer
import Navbar from "../Components/Navbar"; //Navbar
import ProductListing from "../Components/ProductListing"; //ProductListing

const Home = () => {
  return (
    <div className="container mx-auto px-3">
      <Navbar />
      <Banner />
      <ProductListing />
      <Footer />
    </div>
  );
};

export default Home;
