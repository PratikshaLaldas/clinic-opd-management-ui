import React from 'react';
import HospitalHome from './components/HospitalHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientHome from './components/PatientHome';
import RegisterPatient from './components/RegisterPatient';
import AddAppointment from './components/AddAppointment';
import PatientAppointments from './components/PatientAppointments';
import CancelAppointment from './components/CancelAppointment';
import RescheduleComponent from './components/RescheduleAppointment';
import DeleteAppointment from './components/DeleteAppointment';
import UpdatePatient from './components/UpdatePatient';
import DoctorHome from './components/DoctorHome';
import RegisterDoctor from './components/RegisterDoctor';
import UpdateDoctor from './components/UpdateDoctor';
import DeleteDoctor from './components/DeleteDoctor';
import AddSchedule from './components/AddSchedule';
import UpdateSchedule from './components/UpdateSchedule';
import GetPatientDetails from './components/GetPatientDetails';
import AllDoctorInfo from './components/AllDoctorInfo';
import AllSchedules from './components/AllSchedules';
import AllPatient from './components/AllPatient';
import AllAppointment from './components/AllAppointment';
import StaffHome from './components/StaffHome';
import AddToQueue from './components/AddToQueue';
import RemoveFromQueue from './components/RemoveFromQueue';
import UpdateQueueStatus from './components/UpdateQueueStatus';
import AddReminder from './components/AddReminder';
import UpdateReminder from './components/UpdateReminder';
import DeleteReminder from './components/DeleteReminder';
import SendReminderMessage from './components/SendReminderMessage';
import AllQueueDetails from './components/AllQueueDetails';
import AllReminderDetails from './components/AllReminderDetails';
import StaffAllAppointment from './components/StaffAllAppointment';
const App = () => {
  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<HospitalHome />} />
        <Route path="/Home" element={<HospitalHome/>}/>
        <Route path="/PatientHome" element={<PatientHome />} />
        <Route path="/RegisterPatient" element={<RegisterPatient/>}/>
        <Route path="/AllPatient" element={<AllPatient/>}/>
        <Route path="/UpdatePatient" element={<UpdatePatient/>}/>
        <Route path="/AddAppointment" element={<AddAppointment/>}/>
        <Route path="/CancelAppointment" element={<CancelAppointment/>}/>
        <Route path="/RescheduleAppointment" element={<RescheduleComponent/>}/>
        <Route path="/AllAppointment" element={<AllAppointment/>}/>
        <Route path="DeleteAppointment" element={<DeleteAppointment/>}/>
        <Route path="/PatientAppointments" element={<PatientAppointments/>}/>

        <Route path="/DoctorHome" element={<DoctorHome/>}/>
        <Route path="/RegisterDoctor" element={<RegisterDoctor/>}/>
        <Route path="/UpdateDoctor" element={<UpdateDoctor/>}/>
        <Route path="/DeleteDoctor" element={<DeleteDoctor/>}/>
        <Route path="/AddSchedule" element={<AddSchedule/>}/>
        <Route path="/UpdateSchedule" element={<UpdateSchedule/>}/>
        <Route path="/AllSchedules" element={<AllSchedules/>}/>
        <Route path="/GetPatientDetails" element={<GetPatientDetails/>}/>
        <Route path="/AllDoctorInfo" element={<AllDoctorInfo/>}/>

        <Route path="/StaffHome" element={<StaffHome/>}/>
        <Route path="/StaffAllAppointment" element={<StaffAllAppointment/>}/>
        <Route path="/AddToQueue" element={<AddToQueue/>}/>
        <Route path="/RemoveFromQueue" element={<RemoveFromQueue/>}/>
        <Route path="/UpdateQueueStatus" element={<UpdateQueueStatus/>}/>
        <Route path="/AllQueueDetails" element={<AllQueueDetails/>}/>
        <Route path="/AllReminderDetails" element={<AllReminderDetails/>}/>
        <Route path="/AddReminder" element={<AddReminder/>}/>
        <Route path="/UpdateReminder" element={<UpdateReminder/>}/>
        <Route path="/DeleteReminder" element={<DeleteReminder/>}/>
        <Route path="/SendReminderMessage" element={<SendReminderMessage/>}/>

      </Routes>
    </BrowserRouter>
  </>
    
  );
};

export default App;