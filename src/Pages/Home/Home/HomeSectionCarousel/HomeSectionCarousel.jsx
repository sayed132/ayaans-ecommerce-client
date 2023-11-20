import React, { useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const HomeSectionCarousel = ({data, sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 2 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const slidePrev = () => {
        console.log("Slide Prev");
        setActiveIndex(activeIndex - 1);
    };

    const slideNext = () => {
        console.log("Slide Next");
        setActiveIndex(activeIndex + 1);
    };


    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.map((item) => <HomeSectionCard product={item} />)
    return (
        <div className=' '>
            <h2 className='text-2xl font-bold uppercase text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5 '>
                <AliceCarousel
                    key={activeIndex}
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    disableButtonsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {activeIndex !== items.length - 5 &&
                    <button
                        onClick={slideNext}
                        className='z-50 absolute left-1 top-1/2'
                       
                        aria-label='next'>
                      <BsArrowLeftCircleFill  className='text-2xl'/>
                    </button>
                }
                {
                    activeIndex !== 0 &&
                    <button
                        onClick={slidePrev}
                        className='z-50 absolute -right-2 top-1/2'
                        
                        aria-label='prev'>
                        <BsArrowRightCircleFill  className='text-2xl'/>
                    </button>
                }
            </div>
        </div>
    )
}

export default HomeSectionCarousel