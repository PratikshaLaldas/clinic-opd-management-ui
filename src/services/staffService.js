import axios from 'axios';

const STAFF_API_BASE_URL = 'http://localhost:8083/staff';

class StaffService {
    
  getAllQueueDetails() {
        return axios.get(`${STAFF_API_BASE_URL}/queue/all`);
      }

  addToQueue(queueDto) {
    return axios.post(`${STAFF_API_BASE_URL}/add_to_queue`, queueDto);
  }

  removeFromQueue(appointmentId) {
    return axios.post(`${STAFF_API_BASE_URL}/remove_from_queue/${appointmentId}`);
  }

  updateQueueStatus(appointmentId) {
    return axios.patch(`${STAFF_API_BASE_URL}/queue/${appointmentId}`);
  }

  getAllReminderDetails() {
    return axios.get(`${STAFF_API_BASE_URL}/reminder/all`);
  }

  addReminder(reminderDto) {
    return axios.post(`${STAFF_API_BASE_URL}/add_reminder`, reminderDto);
  }

  updateReminder(reminderId, reminderDto) {
    return axios.put(`${STAFF_API_BASE_URL}/update_reminder/${reminderId}`, reminderDto);
  }

  deleteReminder(reminderId) {
    return axios.delete(`${STAFF_API_BASE_URL}/delete_reminder/${reminderId}`);
  }

  sendReminderMessage(reminderId) {
    return axios.post(`${STAFF_API_BASE_URL}/send_reminder/${reminderId}/send`);
  }
}

export default new StaffService();
