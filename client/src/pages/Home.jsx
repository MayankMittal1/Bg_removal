import BgSlide from "../components/BgSlide";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Testimonial from "../components/Testimonial";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps/>
      <BgSlide/>
      <Testimonial/>
      <Upload/>
      <Footer/>
    </div>
  );
};

export default Home;
