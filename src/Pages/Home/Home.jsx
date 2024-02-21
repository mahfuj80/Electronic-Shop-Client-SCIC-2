import Banner from '../../components/Home/Banner/Banner';
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
      <NewsLatter />
    </div>
  );
};

export default Home;
