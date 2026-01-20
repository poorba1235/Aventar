import React, { useEffect, useRef, useState } from 'react';
import '../Styles/card.css'; // Ensure this CSS file is created and included

const Card = ({ image, title, description, tags }) => {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust this value as needed
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card max-w-sm rounded overflow-hidden shadow-lg ${inView ? 'in-view' : ''}`}
    >
      
      <img
        className="h-56"
        src={image}
        alt={title}
      />
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-white">
          {description}
        </p>
      </div>
      <div className="px-3 pt-4 pb-2">
        {tags.map((tag, index) => (
          <a
            key={index}
            href={tag.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;
