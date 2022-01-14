import Image from 'components/atoms/HomeImage/HomeImage';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import CategoryImages from 'components/molecules/CategoryImages/CategoryImages';
import NewCollection from 'components/molecules/NewCollection/NewCollection';
import Carousel from 'components/organisms/Carousel/Carousel';
import Newsletter from 'components/organisms/Newsletter/Newsletter';

const Home = () => (
  <>
    <Image />
    <CategoryImages />
    <SectionTitle center>Nowości</SectionTitle>
    <NewCollection />
    <SectionTitle center>Nasze bestsellery</SectionTitle>
    <Carousel />
    <Newsletter />
  </>
);

export default Home;
