import axios from 'axios';

const DOCTOR_API_BASE_URL = 'http://localhost:8083/doctors';

class doctorService {
  registerDoctor(doctorDto) {
    return axios.post(`${DOCTOR_API_BASE_URL}/register`, doctorDto);
  }

  getAllDoctors(){
    return axios.get(`${DOCTOR_API_BASE_URL}/all`);
  }

  getDoctorById(doctorId){
    return axios.get(`${DOCTOR_API_BASE_URL}/${doctorId}`);
  }

  updateDoctor(doctorId, doctorDto) {
    return axios.put(`${DOCTOR_API_BASE_URL}/update/${doctorId}`, doctorDto);
  }

  deleteDoctor(doctorId) {
    return axios.delete(`${DOCTOR_API_BASE_URL}/delete/${doctorId}`);
  }

  getAllschedules(){
    return axios.get(`${DOCTOR_API_BASE_URL}/allschedules`);
  }
  
  addSchedule(doctorId, doctorScheduleDto) {
    return axios.post(`${DOCTOR_API_BASE_URL}/${doctorId}/schedules`, doctorScheduleDto);
  }

  updateSchedule(doctorId, scheduleId, doctorScheduleDto) {
    return axios.put(`${DOCTOR_API_BASE_URL}/${doctorId}/update_schedule/${scheduleId}`, doctorScheduleDto);
  }

  getPatientDetails(doctorId) {
    return axios.get(`${DOCTOR_API_BASE_URL}/${doctorId}/patients`);
  }
}

export default new doctorService();
