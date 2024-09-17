import React from "react";
import "./dash5.css";

function PageFive() {
  const handleDownload = () => {
    // Logic to handle downloading the report
    alert("Downloading report..."); // Replace with actual logic
  };

  return (
    <div className="page5-container">
      <main className="content">
        {/* Original Victim image and summary */}
        <div className="victim-summary">
          <img
            src="https://via.placeholder.com/150"
            alt="Victim"
            className="victim-img"
          />
          <div className="summary-text">
            <h2>Murder of Rohit Kumar</h2>

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

        {/* New Content starts here */}
        {/* Heading with dotted line */}
        <h1 className="main-heading">
          CYBER SLEUTH Science Lab
          <span className="dotted-line"></span>
        </h1>

        {/* Sample Forensics Report */}
        <h2 className="center-heading">Sample Forensics Report</h2>

        {/* Overview/Case Summary */}
        <h3 className="section-heading">Overview/Case Summary</h3>
        <p className="section-text">
          This case involves the mysterious murder of Rohit Kumar. The case is under investigation by Detective Ajay Kumar. The timeline of events and evidence are detailed below.
        </p>

        {/* Objectives and Evidence Analyzed */}
        <h3 className="section-heading">Objectives</h3>
        <p className="section-text">
          The objective is to analyze the forensic evidence related to the crime scene, identify potential suspects, and provide a detailed report for further legal proceedings.
        </p>
        <h3 className="section-heading">Evidence Analyzed</h3>
        <p className="section-text">
          The evidence collected includes fingerprints, blood samples, and CCTV footage from nearby locations. This data will help identify the culprit and reconstruct the crime scene.
        </p>

        {/* Footer Links and Information */}
        <div className="footer-info">
          <a href="https://www.cybersleuthslab.org" target="_blank" rel="noopener noreferrer">
            https://www.cybersleuthslab.org
          </a>
          <p>192.168.100.10</p>
          <p>info@cybersleuthslab.org</p>
        </div>

        {/* Download Button */}
        <div className="download-btn-container">
          <button onClick={handleDownload} className="download-btn">Download Report</button>
        </div>
      </main>
    </div>
  );
}

export default PageFive;
