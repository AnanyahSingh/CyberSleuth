//Case Overview
import React, { useEffect, useState } from "react";
import "./dash2.css";
import { BulletCases, Victim } from "../assets/images";
import { WitnessTestimonialCard } from "./WitnessTestimonialCard";
import { getCase, getCases } from "../../lib/Node";
import { useParams } from "react-router-dom";

function PageTwo() {
  const [cases, setCases] = useState([]);
  //Get caseId from dynamic route
  const { caseId } = useParams();

  useEffect(() => {
    const fetchCases = async () => {
      const fetchedCase = await getCase(caseId); // Await the result of getCases()
      setCases(fetchedCase);
    };

    fetchCases(); // Call the async function
  }, []);

  return (
    <div className="page2-container">
      {/* Main content section */}
      <main className="content">
        <h1>CASE-{cases[0]?.caseId}</h1>

        {/* Victim image and summary */}
        <div className="victim-summary">
          <img
            src={cases[0]?.caseCoverPhoto.imgUrl}
            alt="Victim"
            className="victim-img w-[400px] h-[300px]"
          />
          <div className="summary-text">
            <h2 className="text-[#284B80]">{cases[0]?.caseTitle}</h2>

            <p className="description">{cases[0]?.caseDescription}</p>
            <div className="victim-details">
              <p>
                <strong>{cases[0]?.leadDetective}:</strong>
                <span className="role">Detective</span>
              </p>
              <p>
                <strong>Date:</strong>
                <span className="details-info">12th Aug 2024</span>
              </p>
              <p>
                <strong>Category:</strong>
                <span className="details-info">{cases[0]?.caseCategory}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Cards section */}
        <div className="cards-section">
          {/* Witness Testimony card */}
          <WitnessTestimonialCard />

          <div className="card">
            <h3>Place of Incident</h3>
            <img
              src={BulletCases}
              alt="Incident Place"
              className="incident-img"
            />
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Location
            </a>
            <div className="card-footer">
              <i className="fas fa-calendar-alt calender"></i> Recorded on: 10th
              Aug 2024
            </div>
          </div>
          <div className="card">
            <h3>Place of Incident</h3>
            <img
              src="https://via.placeholder.com/200"
              alt="Incident Place"
              className="incident-img"
            />
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
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

export default PageTwo;
