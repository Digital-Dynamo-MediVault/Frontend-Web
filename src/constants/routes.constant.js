import DoctorPage from "../pages/doctor.page";
import HomePage from "../pages/home.page";
import HospitalPage from "../pages/hospital.page";
import HospitalAdminPage from "../pages/hospitalAdmin.page";
import LoginPage from "../pages/login.page";
// import TermsPage from "../pages/terms.page"
export const PRIVATE_ROUTES = [
    // {
    //     path: "/",
    //     component: <DashboardPage />
    // },
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
];
