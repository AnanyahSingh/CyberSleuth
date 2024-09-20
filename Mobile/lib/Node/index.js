import { saveToken, getToken } from "../Storage";

//Login
export async function login(formData) {
  var token;

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    token = await response.json();
    if (token.accessToken) {
      saveToken(token.accessToken);
    }
    console.log(token);
  } catch (err) {
    console.log(err);
  }
  return token;
}

export async function createAccount(formData) {
  var token;

  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    token = await response.json();
    saveToken(token.accessToken);
  } catch (err) {
    console.log(err);
  }
  return token;
}

export async function getCases() {
  var cases;

  try {
    const response = await fetch("http://localhost:3000/getcases");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    cases = await response.json();

    return cases;
  } catch (err) {
    console.log(err);
  }
}

//Function to get evidences passing caseId as parameter
export async function getEvidences(caseId) {
  var evidences;

  try {
    const response = await fetch("http://localhost:3000/getevidences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ caseId }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    evidences = await response.json();

    return evidences;
  } catch (err) {
    console.log(err);
  }
}
