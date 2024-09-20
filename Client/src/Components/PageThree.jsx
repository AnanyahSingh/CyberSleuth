import React, { useState } from "react";
import "./dash3.css";
import { createEvidence, sendImage } from "../../lib/Node";

function PageThree() {
  const [suspect, setSuspect] = useState({
    caseId: "4HH4C2",
    evidenceId: "evidence_001",
    testimonial: "",
    name: "",
    affiliationToCase: "",
    extraNotes: "",
    officerName: "",
    images: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSuspect({ ...suspect, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onabort = () => console.log("File reading was aborted");
      reader.onerror = () => console.log("File reading has failed");

      reader.onload = () => {
        // This will contain the image as a base64-encoded string
        const binaryStr = reader.result;
        setSuspect({ ...suspect, images: binaryStr });
      };

      // Read the file as a Data URL (base64 string)
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setSuspect({ ...suspect, images: null });
  };

  const handleConfirmSuspect = () => {
    console.log(suspect);

    // Create evidence
    createEvidence(suspect);
    const b = sendImage(suspect.images);
    console.log(b);

    // Clear form fields
    setSuspect({
      caseId: "4HH4C2",
      evidenceId: "evidence_001",
      testimonial: "",
      name: "",
      affiliationToCase: "",
      extraNotes: "",
      officerName: "",
      images: null,
    });

    alert("Evidence confirmed!");
  };

  return (
    <div className="page3-container">
      <main className="content">
        <h1>New Evidence</h1>

        {/* Photo Upload Area */}
        <div className="upload-area">
          {suspect.images ? (
            <div className="uploaded-photo-container">
              <img
                className="uploaded-photo"
                src={suspect.images}
                alt="Uploaded"
              />
              <div className="photo-buttons">
                <button onClick={handleRemovePhoto} className="small-btn">
                  Remove
                </button>
                <button className="small-btn">
                  <label htmlFor="photo-upload">Change</label>
                </button>
              </div>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
            </div>
          ) : (
            <div>
              <i className="fas fa-image fa-5x"></i>
              <h5>Tap Here</h5>
              <p>Drag & Drop</p>
              <button
                className="upload-button"
                onClick={() => document.getElementById("photo-upload").click()}
              >
                Upload Image
              </button>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
            </div>
          )}
        </div>

        {/* Input fields */}
        <fieldset className="input-field big-field">
          <legend>Testimonial Description</legend>
          <textarea
            placeholder="Enter Testimonial Description"
            name="testimonial"
            value={suspect.testimonial}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset className="input-field">
          <legend>Testifier</legend>
          <input
            type="text"
            placeholder="Enter Testifier Name"
            name="name"
            value={suspect.name}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset className="input-field">
          <legend>Link to Case</legend>
          <input
            type="text"
            placeholder="Enter link to case"
            name="affiliationToCase"
            value={suspect.affiliationToCase}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset className="input-field big-field">
          <legend>Note</legend>
          <textarea
            placeholder="Enter Note"
            name="extraNotes"
            value={suspect.extraNotes}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset className="input-field">
          <legend>Officer Name</legend>
          <input
            type="text"
            placeholder="Enter Officer Name"
            name="officerName"
            value={suspect.officerName}
            onChange={handleInputChange}
          />
        </fieldset>

        {/* Confirm Button */}
        <button className="confirm-btn" onClick={handleConfirmSuspect}>
          Confirm Evidence
        </button>
      </main>
    </div>
  );
}

export default PageThree;
