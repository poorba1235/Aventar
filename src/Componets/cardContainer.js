import React from 'react';
import Card from './Card';

const CardContainer = () => {
  const cards = [
    {
      image: '/Images/stress.png',
      title: 'Stress Level measures ml model',
      description: 'Developed an AI-powered application integrating an ML model for stress level prediction using the Random Forest classifier, achieving 90%+ accuracy. Processed and analyzed patient medical data to identify key predictive features for stress level diagnosis, improving prediction reliability by X%.',
      tags: [{label:'Github Link', url: 'https://github.com/Malinhara/stress-levels-ml-model'}],
    },
    {
      image: '/Images/mern.png',
      title: 'Reality Show Voting Platform',
      description: 'This platform empowers users to vote for contestants directly and simplifies the process for show administrators. Administrators can create public and private voting polls, manage access to voting data, and oversee other essential operations through a user-friendly admin panel.',
      tags: [{label:'Github Link', url: 'https://github.com/Malinhara/Voting-lk-Complete-Voting-site-for-Reality-shows-'}],
    },
    {
        image: '/Images/Ai sql assistant.jpg',
        title: 'Ai SQL Agent',
        description: `AI SQL Agent enables users to interact with databases using natural language queries, reducing 
SQL query time by 50% and improving accessibility for non-technical users. 
Supports all SQL-based databases and includes an admin panel for AI model and database 
customizations, cutting manual configuration efforts by 40%.`,
        tags: [
          { label: 'Github Link', url: 'https://github.com/Malinhara/sql_agent_gemini' }
        ], // Use objects with label and url
      },


    {
        image: '/Images/ml5js.jpg',
        title: 'User Login System Using Face Recognition with ml5.js',
        description: 'This project is a User Login System that leverages ml5.js for facial recognition, allowing users to authenticate through their webcam securely. ',
        tags: [{label:'Github Link', url: 'https://github.com/Malinhara/User-Login-System-using-face-recodnizion-ml5.js-'}],
      },

      {
        image: '/Images/mern_log_site.jpg',
        title: 'Mern Site With Strong Security Features',
        description: `Enhanced session management for user security by implementing OTP verification and password hashing, making it difficult for attackers to access passwords.
Implemented measures to prevent Cross-Site Scripting (XSS) attacks, strengthening application security.
Integrated a logger data view section for better monitoring and analysis of user activity.
Created database users and assigned role-based privileges to ensure secure and controlled access. `,
        tags: [{label:'Github Link',url:'https://github.com/Malinhara/Ecommerce_site-with-MERN--combine-code-'}],
      },
      {
        image: '/Images/calander.jpg',
        title: 'Complete Dynamic Calendar (Node.js, JavaScript, HTML, CSS)',
        description: `This project is a fully dynamic and responsive calendar built using Node.js, JavaScript, HTML, and CSS. The system allows users to navigate through different months and years while dynamically updating the view without refreshing the page. Key features include:(CRUD).`,
        tags: [{label:'Github Link', url:'https://github.com/Malinhara/Complete-Dynamic-calander-Node-js-js-html-css-'}]
      },
  ];

  return (
    <div> <h2 className="text-2xl font-bold tracking-tight text-white sm:text-6xl ml-28">
    Projects
  </h2>
    <div id="projects" className="card-container">
   
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          tags={card.tags}
        />
      ))}
    </div></div>
  );
};

export default CardContainer;
