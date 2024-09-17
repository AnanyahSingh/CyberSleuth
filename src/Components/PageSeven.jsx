import React, { useState } from 'react';
import './dash7.css';

function PageSeven() {
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
        <div className="page7-container">

            {/* Main content section */}
            <main className="content">
                <h1>New Suspect</h1>
                <div>
                {/* Suspect Upload Area */}
                <div className="upload-area">
                    <i className="fas fa-image fa-5x"></i>
                    <h5>Tap Here</h5>
                    <p>Drag & Drop</p>
                    <button>Upload Image</button>
                </div>

                {/* Input fields */}
                <fieldset className="input-field big-field">
                    <legend>Suspect Description</legend>
                    <textarea
                        placeholder="Enter Suspect Description"
                        name="description"
                        value={suspect.description}
                        onChange={handleInputChange}
                    />
                </fieldset>

                <fieldset className="input-field">
                    <legend>Name</legend>
                    <input
                        type="text"
                        placeholder="Enter Suspect Name"
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
                    Confirm Suspect
                </button>
                </div>
            </main>
        </div>
    );
}

export default PageSeven;
