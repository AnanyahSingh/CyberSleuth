//New Evidence
import React, { useState } from 'react';
import './dash3.css';

function PageThree() {
    const [suspect, setSuspect] = useState({
        description: '',
        name: '',
        linkToCase: '',
        note: '',
        officerName: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSuspect({ ...suspect, [name]: value });
    };

    const handleConfirmSuspect = () => {
        alert("Successfully submitted");
    };

    return (
        <div className="page3-container">
            {/* Sidebar with the new items */}
            

            {/* Main content section */}
            <main className="content">
                <h1>New Evidence</h1>

                {/* Suspect Upload Area */}
                <div className="upload-area">
                    <i className="fas fa-image fa-5x"></i>
                    <h5>Tap Here</h5>
                    <p>Drag & Drop</p>
                    <button>Upload Image</button>
                </div>

                {/* Input fields */}
                <fieldset className="input-field big-field">
                    <legend>Testimonial Description</legend>
                    <textarea
                        placeholder="Enter Testimonial Description"
                        name="description"
                        value={suspect.description}
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
                        name="linkToCase"
                        value={suspect.linkToCase}
                        onChange={handleInputChange}
                    />
                </fieldset>

                {/* Note Field */}
                <fieldset className="input-field big-field">
                    <legend>Note</legend>
                    <textarea
                        placeholder="Enter Note"
                        name="note"
                        value={suspect.note}
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
