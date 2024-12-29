import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ReviewSlider.css';
import starImage from '../images/star1.png';

const reviews = [
  {
    name: "Vedant",
    text: "I’ve had a great experience with ASfinacial Services so far. Their advisors are knowledgeable and always take the time to explain complex financial concepts.ed my expectations!",
    rating: 5
  },
  {
    name: "Abhishek",
    text: "I feel more confident about my financial future, and I’m on track to retire early. Highly recommend their services to anyone looking for professional financial guidance.",
    rating: 4
  },
  {
    name: "Animesh",
    text: "I had been looking for a trustworthy financial firm to manage my retirement savings, and I’m so glad I found Asfinacial services. Their team is professional, and they made the entire process so easy to understand.",
    rating: 4
  },
  {
    name: "Sanjeevani",
    text: "ASfinacial Services offers a great range of services, from investment management to retirement planning",
    rating: 4
  }
];

const ReviewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const reviewContainerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    const dragDistance = e.clientX - dragStartX;
    setDragOffset(dragDistance);
  }, [dragStartX, isDragging]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 100) {
      prevSlide();
    } else if (dragOffset < -100) {
      nextSlide();
    }
    setDragOffset(0);
  }, [isDragging, dragOffset, prevSlide, nextSlide]);

  useEffect(() => {
    const container = reviewContainerRef.current;
    if (container) {
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseup', handleMouseUp);
      container.addEventListener('mouseleave', handleMouseUp);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('mouseleave', handleMouseUp);
      }
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  return (
    <div className="review-container" ref={reviewContainerRef}>
      <div className="review-slide" style={{ transform: `translateX(${dragOffset}px)` }}>
        <h3>{reviews[currentSlide].name}</h3>
        
        {/* Align the stars and text below the name */}
        <div className="review-rating">
          {Array.from({ length: reviews[currentSlide].rating }).map((_, index) => (
            <img key={index} src={starImage} alt="star" className="star-image" />
          ))}
        </div>

        <p className="review-text">{reviews[currentSlide].text}</p>
      </div>

      {/* Dots Navigation */}
      <div className="dots-container">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)} // Manually navigate to the clicked dot
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
