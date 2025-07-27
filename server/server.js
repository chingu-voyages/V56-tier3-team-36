const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { Pool } = require("pg");


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//=============== Database Connection ================//

const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT || 5432,
  ssl: {
    rejectUnauthorized: process.env.PGSSLMODE
  }
});

pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database!');
});

//====================== Routes =====================//

// get all patients

app.post("/patients", async(req, res) => {

  try {
    const result = await pool.query("SELECT * FROM patients");
    console.log(result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).send("Internal Server Error");
  } 
  
});

// get patient by patient number
app.get("/patient-status/:num", async (req, res) => {
  const patientNum = req.params.num;
  try {
    const result = await pool.query("SELECT * FROM patients WHERE patient_number = $1", [patientNum]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send("Patient not found");
    }
  } catch (error) {
    console.error("Error fetching patient:", error);
    res.status(500).send("Internal Server Error");
  }
});

// add a new patient
app.post("/new-patient", async (req, res) => {
  const newPatient = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO patients (first_name, last_name, street_address, city, region, country, telephone, contact_email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        newPatient.first_name,
        newPatient.last_name,
        newPatient.street_address,
        newPatient.city,
        newPatient.region,
        newPatient.country,
        newPatient.telephone,
        newPatient.contact_email
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error adding patient:", error);
    res.status(500).send("Internal Server Error");
  }
});



// update patient
app.put("/patients/:id", async (req, res) => {
  const patientId = req.params.id;
  const updatedPatient = req.body;
  try {
    const result = await pool.query(
      "UPDATE patients SET first_name = $1, last_name = $2, street_address = $3, city = $4, region = $5, country = $6, telephone = $7, contact_email = $8 WHERE num = $9 RETURNING *",
      [
        updatedPatient.first_name,
        updatedPatient.last_name,
        updatedPatient.street_address,
        updatedPatient.city,
        updatedPatient.region,
        updatedPatient.country,
        updatedPatient.telephone,
        updatedPatient.contact_email,
        patientId
      ]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send("Patient not found");
    }
  } catch (error) {
    console.error("Error updating patient:", error);
    res.status(500).send("Internal Server Error");
  }
});



// delete patient by patient ID
app.delete("/patients/:id", async (req, res) => {
  const patientId = req.params.id;
  try {
    const result = await pool.query("DELETE FROM patients WHERE id = $1 RETURNING *", [patientId]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send("Patient not found");
    }
  } catch (error) {
    console.error("Error deleting patient:", error);
    res.status(500).send("Internal Server Error");
  }
});






// ================== Start the server ================== //

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log("Server running in port " + process.env.PORT);
});
