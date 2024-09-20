const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var passport = require("passport");
const app = express();
const jwt = require("jsonwebtoken");
const {
  main,
  Agent,
  Case,
  Suspect,
  Evidence,
  ExtraNotes,
} = require("./Database.js");
const {
  RekognitionClient,
  DetectLabelsCommand,
  DetectTextCommand,
  DetectCustomLabelsCommand,
  DetectFacesCommand,
} = require("@aws-sdk/client-rekognition");

//Configuring Express
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.raw({ type: "image/jpeg", limit: "50mb" }));

//Initializing Database
main();

//Setting dynamic port
const port = process.env.PORT || 3000;

//Setting up passport for user authentication
passport.use(Agent.createStrategy());

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

app.use(passport.initialize());

//AWS Rekognition setup
// Configuring RekognitionClient

const client = new RekognitionClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

//Home route for test
app.get("/", async function (req, res) {
  try {
    //Pull agents from db and log
    const agents = await Agent.find({ username: "Detective Frank" }, "_id");
    console.log(agents);

    res.send("Hello World");
  } catch (error) {
    console.log(error);
  }
});

//Request for Authentication
//Authenticatiion middleware
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

// app.get("/auth", authenticateToken, async function (req, res) {
//   try {
//     const user = await User.find(
//       { _id: req.user.id },
//       { username: 1, roomNumber: 1, phoneNumber: 1, profileImage: 1 }
//     );
//     if (user) {
//       res.json(user[0]);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

//Login route
app.post("/login", async function (req, res) {
  try {
    const authenticate = Agent.authenticate();
    authenticate(req.body.agentId, req.body.pwd, async function (err, result) {
      if (err) {
        console.log("Sorry, error occured!");

        console.log(err);
      } else {
        if (result) {
          const userIdObject = await Agent.find(
            { phoneNumber: req.body.agentId },
            "_id"
          );
          const userId = userIdObject[0]._id.valueOf();
          const user = {
            id: userId,
          };

          const accessToken = jwt.sign(user, process.env.TOKEN_SECRET);
          res.json({
            accessToken: accessToken,
          });
        } else {
          console.log("Sorry user not found!");
          res.json({
            status: false,
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});

//Route for creating users
app.post("/register", async function (req, res) {
  console.log(req.body);

  try {
    Agent.register(
      {
        agentId: req.body.agentId,
        username: "Detective Frank",
      },
      req.body.pwd,
      async function (err, user) {
        if (err) {
          console.log(err);
        } else {
          console.log("new user created");
          const userIdObject = await Agent.find(
            { username: "Detective Frank" },
            "_id"
          );

          const userId = userIdObject[0]._id.valueOf();
          const user = {
            id: userId,
            username: "Detective Frank",
          };

          const accessToken = jwt.sign(user, process.env.TOKEN_SECRET);
          res.json({
            accessToken: accessToken,
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

//Route for creating cases
app.post("/createCase", async function (req, res) {
  try {
    console.log("hi");

    // console.log(req.body);

    const newCase = new Case({
      caseId: req.body.caseId,
      caseCategory: req.body.caseCategory,
      caseDescription: req.body.caseDescription,
      caseEvidences: req.body.caseEvidences,
      caseCoverPhoto: req.body.caseCoverPhoto,
      leadDetective: req.body.leadDetective,
      location: req.body.location,
      status: req.body.status,
      suspectId: req.body.suspectId,
      caseTitle: req.body.caseTitle,
    });

    await newCase.save();
    res.send("Case created");
  } catch (error) {
    console.log(error);
  }
});

app.get("/getcases/:caseId", async function (req, res) {
  try {
    var caseId = req.params.caseId;
    caseId = caseId.split(":")[1];
    console.log(caseId);

    // Proper query syntax: caseId should directly match the param value
    const caseData = await Case.find({ caseId: caseId });

    res.json(caseData);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while retrieving case data.");
  }
});

//Route for creating evidence
app.post("/createevidence", async function (req, res) {
  try {
    console.log(req.body);

    const newEvidence = new Evidence({
      caseId: req.body.caseId,
      evidenceId: req.body.evidenceId,
      AiRanking: req.body.AiRanking,
      testimonial: req.body.testimonial,
      images: req.body.images,
      affiliationToCase: req.body.affiliationToCase,
      extraNotes: req.body.extraNotes,
      AiAnalysis: req.body.AiAnalysis,
      witnessName: req.body.witnessName,
    });

    await newEvidence.save();
    res.send("Evidence created");
  } catch (error) {
    console.log(error);
  }
});

//Route for pulling cases
app.get("/getcases", async function (req, res) {
  try {
    const cases = await Case.find();
    res.json(cases);
  } catch (error) {
    console.log(error);
  }
});

//Route for pulling evidences
app.post("/getevidences", async function (req, res) {
  try {
    const evidences = await Evidence.find({ caseId: req.body.caseId });
    res.json(evidences);
  } catch (error) {
    console.log(error);
  }
});

//Route to send images to AWS Rekognition for analysis
app.post("/imageAnalysis", async function (req, res) {
  try {
    console.log("processing image");
    const imageData = Buffer.from(req.body, "base64");

    // Labels Input
    const labelsInput = {
      Image: {
        Bytes: imageData,
      },
      MaxLabels: 10,
      MinConfidence: 70,
    };

    //Custom Labels Input
    const customLabelsInput = {
      Image: {
        Bytes: Buffer.from(imageData, "base64"),
      },
      MaxResults: 100,
      ProjectVersionArn:
        "arn:aws:rekognition:us-east-1:535002865032:project/Lorgiclords/version/Lorgiclords.2024-09-18T07.08.42/1726623523234",
    };

    const labelCommand = new DetectLabelsCommand(labelsInput);
    const detectedLabels = await client.send(labelCommand);

    const customLabelsCommand = new DetectCustomLabelsCommand(
      customLabelsInput
    );
    const detectedCustomLabels = await client.send(customLabelsCommand);

    const labelsOutput = {
      Name: detectedLabels.Labels[0].Name,
      Confidence: `${detectedLabels.Labels[0].Confidence}%`,
      Category: detectedLabels.Labels[0].Categories[0].Name,
    };

    //Treating Custom labels
    allLabelNames = detectedCustomLabels.CustomLabels.map(function (item) {
      return item.Name;
    });

    const uniqueValues = [...new Set(allLabelNames)];
    customLabelsOutput = uniqueValues;

    // //update the AiAnalysis of Evidence collections
    // const concatenatedLabels = [
    //   ...(labelsOutput.Category || []),
    //   ...(labelsOutput.Name || []),
    //   ...(customLabelsOutput || []),
    // ];

    // //find evidence which have evidenceId as evidence_001 with mongoose
    // const evidence = await Evidence.findOne({
    //   evidenceId: "evidence_001",
    // });
    // console.log(evidence);

    // await Evidence.updateOne(
    //   { evidenceId: "evidence_001" },
    //   { $set: { AiAnalysis: { concatenatedLabels } } }
    // );
    //Returning response
    res.status(200).json({ labelsOutput, customLabelsOutput });
    console.log("Done processing, response sent");
  } catch (error) {
    console.log(error);
  }
});

//Listening for port
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var passport = require("passport");
const app = express();
const jwt = require("jsonwebtoken");
const {
  main,
  Agent,
  Case,
  Suspect,
  Evidence,
  ExtraNotes,
} = require("./Database.js");
const {
  RekognitionClient,
  DetectLabelsCommand,
  DetectTextCommand,
  DetectCustomLabelsCommand,
  DetectFacesCommand,
} = require("@aws-sdk/client-rekognition");

//Configuring Express
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.raw({ type: "image/jpeg", limit: "50mb" }));

//Initializing Database
main();

//Setting dynamic port
const port = process.env.PORT || 3000;

//Setting up passport for user authentication
passport.use(Agent.createStrategy());

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

app.use(passport.initialize());

//AWS Rekognition setup
// Configuring RekognitionClient

const client = new RekognitionClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

//Home route for test
app.get("/", async function (req, res) {
  try {
    //Pull agents from db and log
    const agents = await Agent.find({ username: "Detective Frank" }, "_id");
    console.log(agents);

    res.send("Hello World");
  } catch (error) {
    console.log(error);
  }
});

//Request for Authentication
//Authenticatiion middleware
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

// app.get("/auth", authenticateToken, async function (req, res) {
//   try {
//     const user = await User.find(
//       { _id: req.user.id },
//       { username: 1, roomNumber: 1, phoneNumber: 1, profileImage: 1 }
//     );
//     if (user) {
//       res.json(user[0]);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

//Login route
app.post("/login", async function (req, res) {
  try {
    const authenticate = Agent.authenticate();
    authenticate(req.body.agentId, req.body.pwd, async function (err, result) {
      if (err) {
        console.log("Sorry, error occured!");

        console.log(err);
      } else {
        if (result) {
          const userIdObject = await Agent.find(
            { phoneNumber: req.body.agentId },
            "_id"
          );
          const userId = userIdObject[0]._id.valueOf();
          const user = {
            id: userId,
          };

          const accessToken = jwt.sign(user, process.env.TOKEN_SECRET);
          res.json({
            accessToken: accessToken,
          });
        } else {
          console.log("Sorry user not found!");
          res.json({
            status: false,
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});

//Route for creating users
app.post("/register", async function (req, res) {
  console.log(req.body);

  try {
    Agent.register(
      {
        agentId: req.body.agentId,
        username: "Detective Frank",
      },
      req.body.pwd,
      async function (err, user) {
        if (err) {
          console.log(err);
        } else {
          console.log("new user created");
          const userIdObject = await Agent.find(
            { username: "Detective Frank" },
            "_id"
          );

          const userId = userIdObject[0]._id.valueOf();
          const user = {
            id: userId,
            username: "Detective Frank",
          };

          const accessToken = jwt.sign(user, process.env.TOKEN_SECRET);
          res.json({
            accessToken: accessToken,
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

//Route for creating cases
app.post("/createCase", async function (req, res) {
  try {
    console.log("hi");

    // console.log(req.body);

    const newCase = new Case({
      caseId: req.body.caseId,
      caseCategory: req.body.caseCategory,
      caseDescription: req.body.caseDescription,
      caseEvidences: req.body.caseEvidences,
      caseCoverPhoto: req.body.caseCoverPhoto,
      leadDetective: req.body.leadDetective,
      location: req.body.location,
      status: req.body.status,
      suspectId: req.body.suspectId,
      caseTitle: req.body.caseTitle,
    });

    await newCase.save();
    res.send("Case created");
  } catch (error) {
    console.log(error);
  }
});

app.get("/getcases/:caseId", async function (req, res) {
  try {
    var caseId = req.params.caseId;
    caseId = caseId.split(":")[1];
    console.log(caseId);

    // Proper query syntax: caseId should directly match the param value
    const caseData = await Case.find({ caseId: caseId });

    res.json(caseData);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while retrieving case data.");
  }
});

//Route for creating evidence
app.post("/createevidence", async function (req, res) {
  try {
    console.log(req.body);

    const newEvidence = new Evidence({
      caseId: req.body.caseId,
      evidenceId: req.body.evidenceId,
      AiRanking: req.body.AiRanking,
      testimonial: req.body.testimonial,
      images: req.body.images,
      affiliationToCase: req.body.affiliationToCase,
      extraNotes: req.body.extraNotes,
      AiAnalysis: req.body.AiAnalysis,
      witnessName: req.body.witnessName,
    });

    await newEvidence.save();
    res.send("Evidence created");
  } catch (error) {
    console.log(error);
  }
});

//Route for pulling cases
app.get("/getcases", async function (req, res) {
  try {
    const cases = await Case.find();
    res.json(cases);
  } catch (error) {
    console.log(error);
  }
});

//Route for pulling evidences
app.post("/getevidences", async function (req, res) {
  try {
    const evidences = await Evidence.find({ caseId: req.body.caseId });
    res.json(evidences);
  } catch (error) {
    console.log(error);
  }
});

//Route to send images to AWS Rekognition for analysis
app.post("/imageAnalysis", async function (req, res) {
  try {
    console.log("processing image");
    const imageData = Buffer.from(req.body, "base64");

    // Labels Input
    const labelsInput = {
      Image: {
        Bytes: imageData,
      },
      MaxLabels: 10,
      MinConfidence: 70,
    };

    //Custom Labels Input
    const customLabelsInput = {
      Image: {
        Bytes: Buffer.from(imageData, "base64"),
      },
      MaxResults: 100,
      ProjectVersionArn:
        "arn:aws:rekognition:us-east-1:535002865032:project/Lorgiclords/version/Lorgiclords.2024-09-18T07.08.42/1726623523234",
    };

    const labelCommand = new DetectLabelsCommand(labelsInput);
    const detectedLabels = await client.send(labelCommand);

    const customLabelsCommand = new DetectCustomLabelsCommand(
      customLabelsInput
    );
    const detectedCustomLabels = await client.send(customLabelsCommand);

    const labelsOutput = {
      Name: detectedLabels.Labels[0].Name,
      Confidence: `${detectedLabels.Labels[0].Confidence}%`,
      Category: detectedLabels.Labels[0].Categories[0].Name,
    };

    //Treating Custom labels
    allLabelNames = detectedCustomLabels.CustomLabels.map(function (item) {
      return item.Name;
    });

    const uniqueValues = [...new Set(allLabelNames)];
    customLabelsOutput = uniqueValues;

    // //update the AiAnalysis of Evidence collections
    // const concatenatedLabels = [
    //   ...(labelsOutput.Category || []),
    //   ...(labelsOutput.Name || []),
    //   ...(customLabelsOutput || []),
    // ];

    // //find evidence which have evidenceId as evidence_001 with mongoose
    // const evidence = await Evidence.findOne({
    //   evidenceId: "evidence_001",
    // });
    // console.log(evidence);

    // await Evidence.updateOne(
    //   { evidenceId: "evidence_001" },
    //   { $set: { AiAnalysis: { concatenatedLabels } } }
    // );
    //Returning response
    res.status(200).json({ labelsOutput, customLabelsOutput });
    console.log("Done processing, response sent");
  } catch (error) {
    console.log(error);
  }
});

//Listening for port
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
