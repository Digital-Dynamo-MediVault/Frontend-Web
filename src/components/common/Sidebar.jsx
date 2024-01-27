import React from 'react'
import logo from "../assets/logo.svg"
import greenbg from "../assets/lightgreenbg.svg"
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <nav className="m-0 h-[100vh] bg-azure flex flex-col items-center justify-start pt-[1.44rem] px-[0rem] pb-[1vh] box-border gap-[3.75rem] text-left text-[1.28rem] text-black font-inter mq1050:hidden mq1050:pt-[1.25rem] mq1050:pb-[5.81rem] mq1050:box-border mq450:pb-[3.75rem] mq450:box-border w-[15vw]">
            <div className="self-stretch relative bg-azure h-[61.38rem] hidden" />
            <div className="flex flex-row items-end justify-start py-[0rem] px-[1.56rem] gap-[0.44rem] text-[1.13rem]">
                <img
                    className="h-[2rem]  relative z-[1]"
                    loading="eager"
                    alt=""
                    src={logo}
                />

            </div>
            <div className="flex-1 flex flex-col items-center justify-start gap-[2rem]">
                <div className="flex flex-col items-center justify-start gap-[1.31rem] ">
                    <Link to="/hospital" className="no-underline cursor-pointer [border:none] py-[0.69rem] pr-[2.63rem] pl-[2.38rem] bg-teal-100 flex flex-row items-center justify-center z-[1] hover:bg-cadetblue w-[6vw]">
                        <div className="h-[2.94rem] w-[11.44rem] relative bg-teal-100 hidden" />
                        <div className="relative text-[1.28rem] font-medium font-inter text-white text-left z-[2] mq450:text-[1rem] ">
                            Dashboard
                        </div>
                    </Link>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.5rem] pl-[1.25rem]">
                        <Link to="/admin/doctors" className="relative font-medium z-[1] mq450:text-[1rem] cursor-pointer [border:none] py-[0.69rem] pr-[2.63rem] pl-[2.38rem] flex flex-row items-center justify-center  hover:bg-cadetblue no-underline text-black w-[6vw]">
                            Patients
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.5rem] pl-[1.25rem]">
                    <Link to="/admin/doctors" className="relative font-medium z-[1] mq450:text-[1rem] cursor-pointer [border:none] py-[0.69rem] pr-[2.63rem] pl-[2.38rem] flex flex-row items-center justify-center  hover:bg-cadetblue no-underline text-black w-[6vw]">
                        Payments
                    </Link>
                </div>
            </div>
            <Link to="/admin" className="no-underline flex flex-row items-center justify-end pt-[3.5rem] pb-[3.44rem] relative text-white">
                <img
                    className="w-full absolute my-0 mx-[!important] h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-3xs max-w-full overflow-hidden max-h-full z-[1]"
                    loading="eager"
                    alt=""
                    src={greenbg}
                />
                <b className="relative z-[2] mq450:text-[0.5rem] m-2">ADMIN SECTION</b>
            </Link>
        </nav>
    );

}

export default Sidebar