import axios from 'axios';

const PATIENT_API_BASE_URL = 'http://localhost:8083/patients';

class patientService {
  registerPatient(patientDto) {
    return axios.post(`${PATIENT_API_BASE_URL}/register`, patientDto);
  }

  getAllPatients(){
    return axios.get(`${PATIENT_API_BASE_URL}/allpatients`);
  }

  updatePatient(patientId, patientDto) {
    return axios.put(`${PATIENT_API_BASE_URL}/update_patients/${patientId}`, patientDto);
  }

  addAppointment(appointmentDto) {
    return axios.post(`${PATIENT_API_BASE_URL}/add_appointment`, appointmentDto);
  }

  cancelAppointment(appointmentDto) {
    return axios.post(`${PATIENT_API_BASE_URL}/cancel_appointment`, appointmentDto);
  }

  rescheduleAppointment(appointmentDto) {
    return axios.post(`${PATIENT_API_BASE_URL}/reschedule_appointment`, appointmentDto);
  }

  viewPatientAppointment(){
    return axios.get(`${PATIENT_API_BASE_URL}/view_patient_appointments`);
  }

  findAppointment(appointmentId) {
    return axios.get(`${PATIENT_API_BASE_URL}/find_appointments/${appointmentId}`);
  }

  viewPatientAppointments(patientId) {
    return axios.get(`${PATIENT_API_BASE_URL}/view_patient_appointments/${patientId}`);
  }

  deleteAppointment(appointmentId) {
    return axios.delete(`${PATIENT_API_BASE_URL}/delete_appointments/${appointmentId}`);
  }
}

export default new patientService();
