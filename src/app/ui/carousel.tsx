'use client'
import React, { useState, useEffect } from 'react';
import forest from '../../../public/forest.jpg'
import '../globals.css'

type CarouselItem = {
  imageSrc: string;
  phrase: string;
};

const carouselItems: CarouselItem[] = [
  { imageSrc: 'https://w0.peakpx.com/wallpaper/153/596/HD-wallpaper-mount-baker-artistic-forest-dramatic-washington-trees-sky-volcano-pacific-northwest-mountains-fireweed-painting.jpg', phrase: 'Permacultura' },
  { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSVVVMWakW4TiK5y6aXpr5yZl_4VJ6L4FrA&usqp=CAU' , phrase: 'Terapias' },
  { imageSrc: 'https://w0.peakpx.com/wallpaper/153/596/HD-wallpaper-mount-baker-artistic-forest-dramatic-washington-trees-sky-volcano-pacific-northwest-mountains-fireweed-painting.jpg', phrase: 'Orgánica' },
  { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSVVVMWakW4TiK5y6aXpr5yZl_4VJ6L4FrA&usqp=CAU' , phrase: 'Consciencia' },
  { imageSrc: 'https://w0.peakpx.com/wallpaper/153/596/HD-wallpaper-mount-baker-artistic-forest-dramatic-washington-trees-sky-volcano-pacific-northwest-mountains-fireweed-painting.jpg', phrase: 'Saludable' },
  { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSVVVMWakW4TiK5y6aXpr5yZl_4VJ6L4FrA&usqp=CAU' , phrase: 'Tribú' },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = carouselItems[currentIndex];

  return (
    <div className='md:hidden block md:h-[50vh] rounded' style={{ backgroundImage: `url(${currentItem.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0)', padding: '20px' }}>
        <p className='overlay'>{currentItem.phrase}</p>
      </div>
    </div>
  );
};

export default Carousel;
