import axios from 'axios';

const patientsApiUrl = import.meta.env.VITE_BACKEND_URL;

export const getAllPatients = async () => {
  try {
    const response = await axios.get(`${patientsApiUrl}/patients`);
    return response.data;
  } catch (error) {
    throw Error(`Error fetching patients: ${error.message}`);
  }
}
