//Case Overview
import React from 'react';
import './dash6.css';
import { BulletCases, Victim } from '../assets/images';
import { WitnessTestimonialCard } from './WitnessTestimonialCard';

function PageSix() {
  return (
    <div className="page2-container">      

      {/* Main content section */}
      <main className="content">
        <h1>CASE-4HHRC2</h1>

        {/* Victim image and summary */}
        <div className="victim-summary">
          <img src={Victim} alt="Victim" className="victim-img w-[400px] h-[300px]" />
          <div className="summary-text">
          <h2 className='text-[#284B80]'>Murder of Rohit Kumar</h2>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quaerat? Provident impedit
              officia qui dicta laudantium ab? Cupiditate, ipsam cum provident debitis fugit expedita sapiente.
              Maxime blanditiis esse ipsa iure!
            </p>
            <div className="victim-details">
              <p><strong>Ajay Kumar:</strong><span className="role">Detective</span></p>
              <p><strong>Date:</strong><span className="details-info">12th Aug 2024</span></p>
              <p><strong>Category:</strong><span className="details-info">Murder</span></p>
            </div>
          </div>
        </div>

        {/* Cards section */}
        <div className="cards-section">
          {/* Witness Testimony card */}
         <WitnessTestimonialCard />

          <div className="card">
            <h3>Place of Incident</h3>
            <img src={BulletCases} alt="Incident Place" className="incident-img" />
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              View Location
            </a>
            <div className="card-footer">
              <i className="fas fa-calendar-alt calender"></i>  Recorded on: 10th Aug 2024
            </div>
          </div>
          <div className="card">
            <h3>Place of Incident</h3>
            <img  src="https://via.placeholder.com/200" alt="Incident Place" className="incident-img" />
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              View Location
            </a>
            <div className="card-footer">
              <i className="fas fa-calendar-alt"></i> Recorded on: 10th Aug 2024
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PageSix;
