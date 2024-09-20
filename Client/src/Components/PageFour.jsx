//Case Timeline
import React from "react";
import "./dash4.css";

function PageFour() {
  return (
    <div className="page4-container">
      {/* Main content section */}
      <main className="content">
        {/* Victim image and summary */}
        <div className="victim-summary">
          <img
            src="https://via.placeholder.com/150"
            alt="Victim"
            className="victim-img"
          />
          <div className="summary-text">
            <h2>Murder of Rohit Kumarrr</h2>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              quaerat? Provident impedit officia qui dicta laudantium ab?
              Cupiditate, ipsam cum provident debitis fugit expedita sapiente.
              Maxime blanditiis esse ipsa iure!
            </p>
            <div className="victim-details">
              <p>
                <strong>Ajay Kumar:</strong>
                <span className="role">Detective</span>
              </p>
              <p>
                <strong>Date:</strong>
                <span className="details-info">12th Aug 2024</span>
              </p>
              <p>
                <strong>Category:</strong>
                <span className="details-info">Murder</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PageFour;
