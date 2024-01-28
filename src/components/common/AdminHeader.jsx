import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import cookie from "react-cookies";
import axios from "axios";
import { apiUrl, contractAddress } from "../../constants/apiUrl";

const iconStyle = {
    color: "#FFFFFF",
    fontSize: "1.3rem",
};
function DoctorHeader() {
    const [Doctor, setDoctor] = useState(cookie.load("user"));
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleButtonClick = () => {

        setIsPopupOpen(true);
    };
    return (
        <div className="bg-azure h-[8vh] w-[86.05vw]">
            <div className="flex justify-between">
                <div
                    className="w-[30vw] h-[4vh] bg-[#dcebed] my-3 mx-2 p-2 border-2 rounded"
                    style={{ borderColor: "teal-200" }}
                >
                    <div className="flex justify-between"><b>Hospital Id: {contractAddress}</b></div>

                </div>

                <div className="flex items-center">
                    <div className="flex bg-[#2b6a72] h-[2.5vw] w-[2.5vw] border rounded-full m-2 items-center justify-center">
                        <FontAwesomeIcon icon={faBell} style={iconStyle} />
                    </div>
                    <div className="flex bg-[#2b6a72] h-[2.5vw] w-[2.5vw] border rounded-full m-2 items-center justify-center" onClick={() => handleButtonClick()}>
                        <FontAwesomeIcon icon={faUser} style={iconStyle} />
                    </div>
                    <div className="flex bg-[#2b6a72] h-[2.5vw] w-[2.5vw] border rounded-full m-2 items-center justify-center cursor-pointer" onClick={(e) => { e.preventDefault(); cookie.remove("metamaskAddress"); window.location.reload() }}>
                        <FontAwesomeIcon icon={faRightFromBracket} style={iconStyle} />
                    </div>
                </div>
            </div>
            {isPopupOpen &&
                <DoctorDetail Doctor={Doctor} setIsPopupOpen={setIsPopupOpen} />
            }
        </div>
    );
}

export default DoctorHeader;

const DoctorDetail = ({ Doctor, setIsPopupOpen }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-black font-medium">Dr. {Doctor.name}'s Details</h2>
                <div>
                    <p><b>Extra Symptoms:</b> {Doctor?.specialization}</p>
                    <p><b> Age:</b>  {Doctor?.age}</p>
                    <p><b> Experience:</b>  {Doctor?.exprience}</p>
                    <p><b> Doctor ID:</b>  {Doctor?.dId}</p>




                    <div className="flex gap-4 items-center justify-center">

                        {/* Close button */}
                        <button
                            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg focus:outline-none"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
