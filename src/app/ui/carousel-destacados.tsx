'use client'
import React, { useState } from 'react';
import './carousel.css';
import logo from '../../../public/forest.jpg'
import Image from 'next/image';

interface Drink {
  name: string;
  image: string;
}

const CarouselDestacados = () => {
    const drinks = [
        { name: 'Drink 1', image: 'https://wallpaperaccess.com/full/1739064.jpg' },
        { name: 'Drink 2', image: 'https://www.travelandleisure.com/thmb/e1PTFm80-LXnue_5GeiZNcoe69g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3-banteay-kdei-TEMPLETRIP0619-7075e115973549a69b9ec8fc7704d7b6.jpg' },
        { name: 'Drink 3', image: 'https://wallpaperaccess.com/full/1739064.jpg' },
        { name: 'Drink 4', image: 'https://www.travelandleisure.com/thmb/e1PTFm80-LXnue_5GeiZNcoe69g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3-banteay-kdei-TEMPLETRIP0619-7075e115973549a69b9ec8fc7704d7b6.jpg' },
        { name: 'Drink 5', image: 'https://wallpaperaccess.com/full/1739064.jpg' },
        { name: 'Drink 6', image: 'https://www.travelandleisure.com/thmb/e1PTFm80-LXnue_5GeiZNcoe69g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3-banteay-kdei-TEMPLETRIP0619-7075e115973549a69b9ec8fc7704d7b6.jpg' },
        { name: 'Drink 7', image: 'https://wallpaperaccess.com/full/1739064.jpg' },
        { name: 'Drink 8', image: 'https://www.travelandleisure.com/thmb/e1PTFm80-LXnue_5GeiZNcoe69g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3-banteay-kdei-TEMPLETRIP0619-7075e115973549a69b9ec8fc7704d7b6.jpg' },
        { name: 'Drink 9', image: 'https://wallpaperaccess.com/full/1739064.jpg' },
        { name: 'Drink 10', image: 'https://www.travelandleisure.com/thmb/e1PTFm80-LXnue_5GeiZNcoe69g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3-banteay-kdei-TEMPLETRIP0619-7075e115973549a69b9ec8fc7704d7b6.jpg' },
        // ...
      ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % drinks.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + drinks.length) % drinks.length);
  };

  const visibleIndices = [
    (activeIndex - 2 + drinks.length) % drinks.length,
    (activeIndex - 1 + drinks.length) % drinks.length,
    activeIndex,
    (activeIndex + 1) % drinks.length,
    (activeIndex + 2) % drinks.length,
  ];

  const positionClass = (index: number): string => {
    const position = visibleIndices.indexOf(index);
    switch (position) {
      case 0: return 'far-left';
      case 1: return 'left';
      case 2: return 'center';
      case 3: return 'right';
      case 4: return 'far-right';
      default: return '';
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-controls carousel-controls-prev" onClick={goToPrevious}>
        <button>Previous</button>
      </div>
      <div className="carousel">
        {visibleIndices.map((index) => {
          const drink = drinks[index];
          const isActive = index === activeIndex;
          return (
            <div
              className={`carousel-item ${isActive ? 'active' : ''} ${positionClass(index)}`}
              key={index}
            >
              <Image src={logo} alt='foto' width='100' height='100' />
            </div>
          );
        })}
      </div>
      <div className="carousel-controls carousel-controls-next" onClick={goToNext}>
        <button>Next</button>
      </div>
      <h2>{drinks[activeIndex].name}</h2>
    </div>
  );
};

export default CarouselDestacados;
