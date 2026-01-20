import React, { useEffect } from "react";
import '../Styles/timeline.css';

const Timeline = () => {
    useEffect(() => {
      const handleScroll = () => {
        const timelineItems = document.querySelectorAll(".timeline-item");
  
        timelineItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight - 150) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
      
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const timelineEvents = [
      {
        year: "2020",
        description: "Started my Software Engineering degree at NIBM.",
      },
      {
        year: "2021",
        description:
          "Gained experience in front-end and back-end development using React.js and Node.js.",
      },
      {
        year: "2022",
        description:
          "Developed a lung cancer prediction model integrated with a website.",
      },
      // Add more events here
    ];
  
    return (
      <div className="timeline-container">
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <h2>{event.year}</h2>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Timeline;