import React from 'react';
import Header from '../../Components/Header/Header';
import HomeBanner from './HomeBanner/HomeBanner';
import LocationContact from './LocationContact/LocationContact';

const HomePage = () => {
    return (
        <>
            <Header></Header>
            <HomeBanner></HomeBanner>
            <LocationContact></LocationContact>
        </>
    );
};

export default HomePage;