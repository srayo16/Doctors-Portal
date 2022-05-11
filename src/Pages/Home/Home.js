import React from 'react';
import Footer from '../Shared/Footer';
import CardSimilar from './CardSimilar';
import Exceptional from './Exceptional';
import FirsSection from './FirsSection';
import Info from './Info';
import Makeanappoinment from './Makeanappoinment';
import Stayconnect from './Stayconnect';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <FirsSection></FirsSection>
            <Info></Info>
            <CardSimilar></CardSimilar>
            <Exceptional></Exceptional>
            <Makeanappoinment></Makeanappoinment>
            <Testimonial></Testimonial>
            <Stayconnect></Stayconnect>
            <Footer></Footer>
        </div>
    );
};

export default Home;