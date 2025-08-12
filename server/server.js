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

pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client:', err.message);
});

function generatePatientNumber() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let number = "";
  for (let i = 0; i < 6; i++) {
    number += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return number;
}

async function getUniquePatientNumber() {
  let unique = false;
  let newNumber;
  while (!unique) {
    newNumber = generatePatientNumber();
    const result = await pool.query(
      "SELECT 1 FROM patients WHERE patient_number = $1 LIMIT 1",
      [newNumber]
    );
    if (result.rows.length === 0) {
      unique = true;
    }
  }
  return newNumber;
}

//====================== Routes =====================//

// generate patient number
app.get("/generate-patient-number", async (req, res) => {
  try {
    const number = await getUniquePatientNumber();
    res.json({ patient_number: number });
  } catch (error) {
    console.error("Error generating patient number:", error);
    res.status(500).send("Internal Server Error");
  }
});

// get all patients

app.get("/patients", async(req, res) => {

  try {
    const result = await pool.query("SELECT * FROM patients");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).send("Internal Server Error");
  } 
  
});

// get patient by patient number
app.get("/get-patient/:patientNumber", async (req, res) => {
  const patientNumber = req.params.patientNumber;
  try {
    const result = await pool.query("SELECT * FROM patients WHERE patient_number = $1", [patientNumber]);
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
app.post("/create-new-patient", async (req, res) => {
  try {
    let patientNumber = req.body.patient_number;

    let exists = true;
    while (exists) {
      if (!patientNumber) {
        patientNumber = await getUniquePatientNumber();
      }
      const check = await pool.query(
        "SELECT 1 FROM patients WHERE patient_number = $1 LIMIT 1",
        [patientNumber]
      );
      if (check.rows.length === 0) {
        exists = false;
      } else {
        patientNumber = await getUniquePatientNumber();
      }
    }

    const newPatient = req.body;
    const result = await pool.query(
      "INSERT INTO patients (patient_number, first_name, last_name, street_address, city, region, country, telephone, contact_email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        patientNumber,
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



// update patient information
app.put("/update-patient/:patientNumber", async (req, res) => {
  const patientNumber = req.params.patientNumber;
  const updatedPatient = req.body;
  console.log("Updating patient with patientNumber:", patientNumber);
  console.log("Updated patient data:", updatedPatient);
  try {
    const result = await pool.query(
      "UPDATE patients SET first_name = $1, last_name = $2, street_address = $3, city = $4, region = $5, country = $6, telephone = $7, contact_email = $8 WHERE patient_number = $9 RETURNING *", 
      [
        updatedPatient.first_name,
        updatedPatient.last_name,
        updatedPatient.street_address,
        updatedPatient.city,
        updatedPatient.region,
        updatedPatient.country,
        updatedPatient.telephone,
        updatedPatient.contact_email,
        patientNumber
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

// delete patient by patient Number
app.delete("/delete-patient/:patientNumber", async (req, res) => {
  const patientNumber = req.params.patientNumber;
  try {
    const result = await pool.query("DELETE FROM patients WHERE patient_number = $1 RETURNING *", [patientNumber]);
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



// update patient status
app.put("/update-patient-status/:patientNumber", async (req, res) => {
  const patientNumber = req.params.patientNumber;
  const currentStatus = req.body.current_status;
  try {
    const result = await pool.query(
      "UPDATE patients SET current_status = $1 WHERE patient_number = $2 RETURNING *",
      [
        currentStatus,
        patientNumber
      ]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send("Patient not found");
    }
  } catch (error) {
    console.error("Error updating patient status:", error);
    res.status(500).send("Internal Server Error");
  }
});






// ================== Start the server ================== //

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log("Server running in port " + process.env.PORT);
});
