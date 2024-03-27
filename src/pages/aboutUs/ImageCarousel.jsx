import React, { useState, useEffect } from 'react';
import demo1 from '../../assets/images/aboutUs/imgCarousel/demo1.png';
import demo2 from '../../assets/images/aboutUs/imgCarousel/demo2.png';
import demo3 from '../../assets/images/aboutUs/imgCarousel/demo3.png';
import demo4 from '../../assets/images/aboutUs/imgCarousel/demo4.png';

const images = [demo1, demo2, demo3, demo4];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
    <div className="relative w-full h-96 overflow-hidden mt-10">
      {images.map((image, index) => (
        <img
          key={index}
          className={`absolute inset-0 w-full h-full object-cover ${
            currentIndex === index ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'
          }`}
          src={image}
          alt={`Slide ${index}`}
        />
      ))}
    </div>
    <div className='mx-10 mt-10 md:mt-16 md:mx-40 '>
        <h1 className='text-2xl font-semibold title-font mb-4 text-center text-gray-900'>THE ENTERPRISE</h1>
        <p className=' mt-4 mb-16 text-base  text-justify text-gray-600'>
        Founded in 2008 by L. Lanu Jamir, started with UPS manufacturing, followed by Zip Sound Systems.
        Zip Engineering & Innovation Centre, just like the zip that we know, envisions an ‘all in one’ centre 
        with innovation, sustainability, development all zipped into one bag.
        We have always been looking to put to work all the resources that are there at our disposal, 
        given the geographic location of Nagaland and the North-East region of India. We aim to disrupt existing 
        markets by introducing innovative, clean, and green solutions to contemporary challenges. With a commitment 
        to making lives simpler, easier, and better, we strive to pioneer transformative advancements that leave a 
        positive impact on society.
        </p>
    </div>
    </section>
  );
};

export default ImageCarousel;
