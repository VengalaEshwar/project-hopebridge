// Emergency.jsx
import React from 'react';
import '../styles/Emergency.css';

function Emergency() {
  return (
    <div className="emergency-container">
      <h1 className="emergency-title">Emergency Services</h1>

      <div className="section">
        <h2>Chat with the Team</h2>
        <p>
          Need assistance? Our team is here to help you 24/7. Reach out to us via the live chat feature for immediate support.
          Whether you have queries about ongoing emergencies or need guidance, our trained professionals are ready to assist.
        </p>
        <button className="chat-button">Start Chat</button>
      </div>

      <div className="section">
        <h2>Disaster Management</h2>
        <p>
          Stay informed during emergencies. Learn about disaster preparedness, evacuation plans, and how to stay safe in critical situations.
          We provide resources on fire safety, earthquake drills, flood response, and more. Stay proactive and protect yourself and your loved ones.
        </p>
        <button className="info-button">Learn More</button>
      </div>

      <div className="section">
        <h2>Additional Information</h2>
        <ul>
          <li>Emergency contact numbers</li>
          <li>Nearest shelters</li>
          <li>First aid tips</li>
          <li>Weather alerts</li>
          <li>Government emergency guidelines</li>
          <li>Community support groups</li>
          <li>Evacuation routes and maps</li>
          <li>Health and safety regulations during disasters</li>
        </ul>
      </div>

      <div className="section">
        <h2>Emergency Kits</h2>
        <p>
          Prepare an emergency kit that includes essential items such as food, water, medications, flashlights, and batteries. 
          Having a well-prepared kit can make a significant difference during a crisis. Remember to customize kits for specific needs like children, pets, or medical conditions.
        </p>
        <p>
          Examples of items to include:
          <ul>
            <li>Non-perishable food items</li>
            <li>Portable water filters</li>
            <li>Basic tools and multi-purpose knives</li>
            <li>Blankets and warm clothing</li>
            <li>Battery-powered radio</li>
          </ul>
        </p>
      </div>

      <div className="section">
        <h2>Volunteer Opportunities</h2>
        <p>
          Join our efforts to make a difference. Volunteer for disaster relief programs, help with community training, or assist with resource distribution.
          Together, we can build a more resilient community. Volunteers can participate in:
          <ul>
            <li>Organizing evacuation drills</li>
            <li>Distributing emergency supplies</li>
            <li>Providing psychological first aid</li>
            <li>Training others in disaster preparedness</li>
          </ul>
        </p>
        <button className="volunteer-button">Get Involved</button>
      </div>

      <div className="section">
        <h2>Resources and Articles</h2>
        <p>
          Expand your knowledge about emergency management by exploring our curated resources:
          <ul>
            <li>How to prepare for natural disasters</li>
            <li>Psychological impact of emergencies</li>
            <li>Government relief programs and how to access them</li>
            <li>Stories of survival and lessons learned</li>
          </ul>
        </p>
        <button className="resources-button">Explore Resources</button>
      </div>
    </div>
  );
}

export default Emergency;
