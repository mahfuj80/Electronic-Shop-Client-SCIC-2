import Banner from '../../components/Home/Banner/Banner';
import Contact from '../../components/Home/Contact/Contact';
import Faq from '../../components/Home/Faq/Faq';
import FeaturedProducts from '../../components/Home/FeaturedProducts/FeaturedProducts';
import NewsLatter from '../../components/Home/NewsLatter/NewsLatter';
import OurProducts from '../../components/Home/OurProducts/OurProducts';

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <OurProducts />
      <Faq />
      <Contact />
      <NewsLatter />
    </div>
  );
};

export default Home;
