import axios from 'axios';

const patientsApiUrl = import.meta.env.VITE_BACKEND_URL;

export const getAllPatients = async () => {
  try {
    const response = await axios.get(`${patientsApiUrl}/patients`);
    localStorage.setItem("patients", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw Error(`Error fetching patients: ${error.message}`);
  }
}

// ================= SSE Subscription =================
export const subscribePatientUpdates = (onUpdate) => {
  const eventSource = new EventSource(`${patientsApiUrl}/events`);

  eventSource.onopen = () => console.log("SSE connected");
  
  eventSource.onmessage = (event) => {
    try {
      const updatedPatient = JSON.parse(event.data);
      onUpdate(updatedPatient); 
    } catch (err) {
      console.error("Error parsing SSE message:", err);
    }
  };

  eventSource.onerror = (err) => {
    console.error("SSE error", err);
    eventSource.close();
  };

  // Return the EventSource so the component can close it on unmount
  return eventSource;
};