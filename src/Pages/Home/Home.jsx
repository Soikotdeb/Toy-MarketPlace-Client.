import useTitle from '../../Hooks/UseTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CarGallery from '../CarGallery/CarGallery';
import ExtraReleVant from '../ExtraRelevant/ExtraReleVant';
import ShopCategory from '../ShopCategory/ShopCategory';
import Relevant from '../relevant/Relevant';
const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <CarGallery></CarGallery>
            <ShopCategory></ShopCategory>
            <About></About>
            <Relevant></Relevant>
            <ExtraReleVant></ExtraReleVant>
        </div>
    );
};

export default Home;


