import Appointment from "../components/doctor/appointment.component";
import Activate from "../components/patient/activate.component";
import ActivatePage from "../pages/activate.page";
import DoctorPage from "../pages/doctor.page";
import HomePage from "../pages/home.page";
import HospitalPage from "../pages/hospital.page";
import HospitalAdminPage from "../pages/hospitalAdmin.page";
import LoginPage from "../pages/login.page";
export const PRIVATE_ROUTES = [
  {
    path: "/doctor",
    component: <DoctorPage />,
  },
  {
    path: "/hospital",
    component: <HospitalPage />,
  },
  {
    path: "/admin",
    component: <HospitalAdminPage />,
  },
  {
    path: "/appointment",
    component: <Appointment />,
  },
];
export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/activate",
    component: <ActivatePage />,
  },
];
