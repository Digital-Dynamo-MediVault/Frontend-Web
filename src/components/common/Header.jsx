import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import cookie from "react-cookies";

const iconStyle = {
    color: "#FFFFFF",
    fontSize: "1.3rem",
};

function Header() {
    return (
        <div className="bg-azure h-[8vh] w-[86.05vw]">
            <div className="flex justify-between">
                <div
                    className="w-[30vw] h-[4vh] bg-[#dcebed] my-3 mx-2 p-2 border-2 rounded"
                    style={{ borderColor: "teal-200" }}
                >

                </div>

                <div className="flex items-center">
                    <div className="flex bg-[#2b6a72] h-[2.5vw] w-[2.5vw] border rounded-full m-2 items-center justify-center">
                        <FontAwesomeIcon icon={faBell} style={iconStyle} />
                    </div>
                    <div className="flex bg-[#2b6a72] h-[2.5vw] w-[2.5vw] border rounded-full m-2 items-center justify-center">
                        <FontAwesomeIcon icon={faUser} style={iconStyle} />
                    </div>
                    <div className="flex bg-[#2b6a72] h-[2.5vw] w-[2.5vw] border rounded-full m-2 items-center justify-center cursor-pointer" onClick={(e) => { e.preventDefault(); cookie.remove("metamaskAddress"); window.location.reload() }}>
                        <FontAwesomeIcon icon={faRightFromBracket} style={iconStyle} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
