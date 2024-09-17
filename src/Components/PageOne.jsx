//Create New Case 
import React from 'react';
import './dash1.css';

function PageOne() {
  return (
    <div className="page1-container">
    
      <main className="content">
        <div className="header">
          <i className="fas fa-times icon close-icon cross"></i> {/* Cross icon */}
          <i className="fas fa-save icon save-icon save" ></i>   {/* Save icon */}
        </div>

        <section className="form-section">
          <div className="case-form-container">
            <div className="form-row">
              <input type="text" placeholder="Case Title" className="form-input" />
            </div>
            <div className="form-row">
              <select className="form-select">
                <option value="">Select Case Category</option>
                <option value="Theft">Theft</option>
                <option value="Assault">Assault</option>
                <option value="Fraud">Fraud</option>
                <option value="Murder">Murder</option>
              </select>
            </div>
            <div className="form-row upload-container">
              <div className="upload-box">
                <i className="fas fa-camera"></i>
                <p>Upload Image</p>
              </div>
            </div>
            <div className="form-row">
              <textarea placeholder="Case Description" className="form-textarea"></textarea>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PageOne;
