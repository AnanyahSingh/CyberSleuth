//Dashboard

import React from "react";
import "./dash.css";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import cases from "../constants";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <div className="header">
          <h1 className="">CASES</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search a case" />
            <i className="fas fa-search"></i>
          </div>
          <NavLink to="/newCases">
          <i className="fas fa-edit"></i>
          </NavLink>
          <button className="btn">Open Cases</button>
          <button className="btn2">Closed Cases</button>
        </div>
        <div className="cases-list">
        {
  cases.map((caseItem, index) => {
    return (
      <NavLink to={"/overview"} className="case" key={caseItem.caseId}>
              <div className="case-id">Case ID: {caseItem.caseId}</div>
              <div className="case-title">{caseItem.caseTitle}</div>
              <div className="case-date">
                <b>Date Opened:</b> {caseItem.caseDate}
              </div>
              <div className="case-category">
                <b>Category:</b> {caseItem.caseCategory}
              </div>
              <div className="case-location">{caseItem.caseLocation}</div>
              <div className="case-status">{caseItem.caseStatus}</div>
            </NavLink>
    );
  })
}

          
        </div>
        <div className="total-cases">
          <div className="total-cases-title">Total No. of Cases</div>
          <div className="total-cases-count">4</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
