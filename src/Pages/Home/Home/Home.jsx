import React from 'react';
import HomeSlider from './HomeSlider/HomeSlider';
import Category from './Category/Category';
import TopRatingProducts from './TopRatingProducts/TopRatingProducts';
import BestSellingProducts from './BestSellingProducts/BestSellingProducts';
import HomeSectionCarousel from './HomeSectionCarousel/HomeSectionCarousel';
import { Mens_kurta } from '../Data/Mens_kurta';

const Home = () => {
    return (
        <div>
            <HomeSlider />
            <Category />
            {/* <TopRatingProducts />
            <BestSellingProducts /> */}
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={Mens_kurta} sectionName={"Top Ratings Product"}/>
                <HomeSectionCarousel data={Mens_kurta} sectionName={"Best Selling Product"}/>
                
            </div>
        </div>
    );
};

export default Home;