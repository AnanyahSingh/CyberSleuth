//Dashboard

import React, { useEffect, useState } from "react";
import "./dash.css";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import cases from "../constants";
import { getCases } from "../../lib/Node";

function Dashboard() {
  const [casess, setCasess] = useState(null);

  useEffect(() => {
    const fetchCases = async () => {
      const fetchedCases = await getCases(); // Await the result of getCases()
      setCasess(fetchedCases);
    };

    fetchCases(); // Call the async function
  }, []);

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
          {casess?.map((caseItem, index) => {
            "/overview/";
            return (
              <NavLink
                to={`/overview/${caseItem.caseId}`}
                className="case"
                key={caseItem.caseId}
              >
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
          })}
        </div>
        <div className="total-cases">
          <div className="total-cases-title">Total No. of Cases</div>
          <div className="total-cases-count">{casess?.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
