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

//function to create send evidenc data to localhost3000/createevidence
export async function createEvidence(evidence) {
  try {
    const response = await fetch("http://localhost:3000/createevidence", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evidence),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return "Evidence created";
  } catch (err) {
    console.log(err);
  }
}

//function to pull each case details
export async function getCase(caseId) {
  try {
    const response = await fetch(`http://localhost:3000/getcases/:${caseId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const res = await response.json();
    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function sendImage(imageData) {
  // console.log(imageData);

  const formData = new FormData();
  formData.append("image", imageData);

  const base64String = imageData.split(",")[1];
  const binaryString = atob(base64String);

  const buffer = new ArrayBuffer(binaryString.length);
  const bufferView = new Uint8Array(buffer);
  for (let i = 0; i < binaryString.length; i++) {
    bufferView[i] = binaryString.charCodeAt(i);
  }

  console.log(buffer);

  //

  try {
    const response = await fetch("http://localhost:3000/imageAnalysis", {
      method: "POST",
      headers: {
        "Content-Type": "image/jpeg",
      },
      body: buffer,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const res = await response.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

//Function to create case
export async function createCase(caseData) {
  try {
    const response = await fetch("http://localhost:3000/createCase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(caseData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return "Case created";
  } catch (err) {
    console.log(err);
  }
}
