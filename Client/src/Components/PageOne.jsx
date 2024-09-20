import React, { useState } from "react";
import "./dash1.css";
import { Form } from "react-router-dom";
import { uploadImageAsync } from "../../firebaseConfig";
import { createCase } from "../../lib/Node";

function PageOne() {
  const [caseData, setCaseData] = useState({
    caseDate: "",
    caseCoverImage: "",
    caseDescription: "",
    caseTitle: "",
    caseCategory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCaseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(caseData);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImageAsync(URL.createObjectURL(file)).then((url) => {
        setCaseData({ ...caseData, caseCoverImage: url });
      });
    }
  };

  const handleRemovePhoto = () => {
    setCaseData({ ...caseData, caseCoverImage: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Construct a caseInfo object
    const caseInfo = {
      caseDate: new Date().toDateString(),
      ...caseData,
      //random caseId
      caseId: Math.floor(Math.random() * 1000),
      //case coverCoverPhoto as object with
      caseCoverPhoto: {
        imgUrl: caseData.caseCoverImage,
      },
      status: "Active",
    };

    //Send caseInfo to the server
    createCase(caseInfo);

    //clear form field
    setCaseData({
      caseDate: "",
      caseCoverImage: "",
      caseDescription: "",
      caseTitle: "",
      caseCategory: "",
    });

    console.log(caseData);
  };

  return (
    <div className="page1-container">
      <main className="content">
        <div className="header">
          <button className="back-btn">
            <i className="fas fa-times icon close-icon cross"></i>{" "}
          </button>
          {/* Cross icon */}
          <i
            className="fas fa-save icon save-icon save"
            onClick={handleSubmit}
          ></i>{" "}
          {/* Save icon */}
        </div>

        <section className="form-section">
          <Form className="case-form-container" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="caseTitle"
                placeholder="Case Title"
                value={caseData.caseTitle}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-row">
              <select
                name="caseCategory"
                className="form-select"
                value={caseData.caseCategory}
                onChange={handleChange}
              >
                <option value="">Select Case Category</option>
                <option value="Theft">Theft</option>
                <option value="Assault">Assault</option>
                <option value="Fraud">Fraud</option>
                <option value="Murder">Murder</option>
              </select>
            </div>

            {caseData.caseCoverImage ? (
              <div className="uploaded-photo-container">
                <img
                  className=""
                  src={caseData.caseCoverImage}
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
              <div className="border-2 w-[20%]">
                <i className="fas fa-image fa-5x "></i>
                <h5>Tap Here</h5>
                <p>Drag & Drop</p>
                <button
                  className="text-2xl text-white bg-[#000000] p-2 rounded-lg"
                  onClick={() =>
                    document.getElementById("photo-upload").click()
                  }
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

            {/* <div className="form-row upload-container">
              <div className="upload-box">
                <i className="fas fa-camera"></i>
                <p>Upload Image</p>
              </div>
            </div> */}
            <div className="form-row">
              <textarea
                name="caseDescription"
                placeholder="Case Description"
                value={caseData.caseDescription}
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
            </div>
          </Form>
        </section>
      </main>
    </div>
  );
}

export default PageOne;
