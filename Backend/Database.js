//Importing Libraries
require("dotenv").config();
const mongoose = require("mongoose");
var findOrCreate = require("mongoose-findorcreate");
const passportLocalMongoose = require("passport-local-mongoose");

main().catch((err) => console.log(err));

//Mongoose DB connection
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

// const Agent = new mongoose.model("Agent", agentSchema);

//Case Schema
const caseSchema = new mongoose.Schema({
  caseId: String,
  caseCategory: String,
  caseDescription: String,
  caseEvidences: Array,
  caseCoverPhoto: {
    imgType: String,
    imgUrl: String,
  },
  launchDate: Date,
  leadDetective: String,
  location: String,
  status: String,
  suspectId: String,
  dateAndTime: Date,
  caseTitle: String,
});
const Case = new mongoose.model("Case", caseSchema);

//Suspect Schema
const suspectSchema = new mongoose.Schema({
  Id: String,
  name: String,
  image: {
    imgType: String,
    imgUrl: String,
  },
  description: String,
  affiliationToVictim: String,
  notesId: String,
  dateAndTime: String,
});
const Suspect = new mongoose.model("Suspect", suspectSchema);

//EvidenceSchema
const evidenceSchema = new mongoose.Schema({
  caseId: String,
  evidenceId: String,
  AiRanking: String,
  images: {
    imgType: String,
    imgUrl: String,
  },
  testimonial: String,
  witnessName: String,
  affiliationToCase: String,
  extraNotes: String,
  AiAnalysis: String,
  dateAndTime: String,
});
const Evidence = new mongoose.model("Evidence", evidenceSchema);

//ExtrasSchema
const notesSchema = new mongoose.Schema({
  noteBody: String,
  officerId: String,
});
const ExtraNotes = new mongoose.model("ExtraNotes", notesSchema);

//Agent schema
const agentSchema = new mongoose.Schema({
  agentName: String,
  agentId: String,
  userName: String,
  password: String,
  agentProfile: {
    imgType: String,
    imgUrl: String,
  },
});

const options = {
  hashField: "password",
  usernameQueryFields: ["userName"],
};
agentSchema.plugin(passportLocalMongoose, options);
agentSchema.plugin(findOrCreate);
const Agent = new mongoose.model("agent", agentSchema);

module.exports = { main, Agent, Case, Suspect, Evidence, ExtraNotes };
