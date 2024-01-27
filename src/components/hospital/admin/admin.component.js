import React, { useState } from "react";
import Sidebar from "../../common/Sidebar";
import Header from "../../common/Header";
import docImg from "../../assets/newdoctor.svg";
import caseImg from "../../assets/newcase.svg";
import patImg from "../../assets/newpatient.svg";
import adminbg from "../../assets/adminbg.svg";
import Newpatient from "./newpatient";
import Newcase from "./newcase";
import NewDoctor from "./newdoctor";

function Admin() {
    const [showCasePopup, setShowCasePopup] = useState(false);
    const [showPatientPopup, setShowPatientPopup] = useState(false);
    const [showDoctorPopup, setShowDoctorPopup] = useState(false);

    const handleButtonClick = (buttonNumber) => {
        switch (buttonNumber) {
            case 1:
                setShowCasePopup(true);
                break;
            case 2:
                setShowPatientPopup(true);
                break;
            case 3:
                setShowDoctorPopup(true);
                break;
            default:
                break;
        }
    };

    const handleClosePopups = () => {
        setShowCasePopup(false);
        setShowPatientPopup(false);
        setShowDoctorPopup(false);
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-[100vw]">
                <Header />
                <div className="flex my-auto w-[85vw] items-center justify-center">
                    <img
                        className="w-full absolute z-[-1] my-0 mx-[!important] h-full top-[0rem] right-[0rem] bottom-[0rem] rounded-3xs max-w-full overflow-hidden max-h-full"
                        loading="eager"
                        alt=""
                        src={adminbg}
                    />
                    <div
                        className="flex flex-col bg-azure cursor-pointer m-4 rounded-[2rem] border-2 border-teal-100 p-[2vw] gap-2"
                        onClick={() => handleButtonClick(1)}
                    >
                        <div>
                            <img src={caseImg} className="h-[36vh]" alt="Case" />
                        </div>
                        <div className="font-inter font-extrabold text-teal-100 text-[2rem]">
                            New Case
                        </div>
                    </div>
                    <div
                        className="flex flex-col bg-azure cursor-pointer rounded-[2rem] border-2 border-teal-100 m-4 p-[2vw] gap-2"
                        onClick={() => handleButtonClick(2)}
                    >
                        <div>
                            <img src={patImg} className="h-[36vh]" alt="Patient" />
                        </div>
                        <div className="font-inter font-extrabold text-teal-100 text-[2rem]">
                            New Patient
                        </div>
                    </div>
                    <div
                        className="flex flex-col bg-azure cursor-pointer m-4 rounded-[2rem] border-2 border-teal-100 p-[2vw] gap-2"
                        onClick={() => handleButtonClick(3)}
                    >
                        <div>
                            <img src={docImg} className="h-[36vh]" alt="Doctor" />
                        </div>
                        <div className="font-inter font-extrabold text-teal-100 text-[2rem]">
                            New Doctor
                        </div>
                    </div>
                </div>
            </div>
            {/* Popups */}
            {showCasePopup && <Newcase handleClosePopups={handleClosePopups} />}

            {showPatientPopup && <Newpatient handleClosePopups={handleClosePopups} />}

            {showDoctorPopup && <NewDoctor handleClosePopups={handleClosePopups} />}
        </div>
    );
}

export default Admin;
