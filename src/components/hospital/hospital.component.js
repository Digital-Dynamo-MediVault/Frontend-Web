import React from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import money from "../assets/money.svg";
function Hospital() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-[90vw]">
        <Header />
        <div className="flex flex-col p-4 h-[30vh] w-[82vw]">
          <div className="border-teal-200 border-[4px] h-[30vh] w-full bg-azure rounded-md p-4 flex justify-center items-center gap-4 ">
            <div className="flex bg-teal-200 rounded-md h-[20.5vh] w-[20vw] p-4  flex-col gap-5 justify-start items-start">
              <p className="text-white font-bold text-2xl m-0">
                TODAY's PATIENT
              </p>
              <p className="text-white font-bold text-[2rem] m-0">78</p>
            </div>
            <div className="flex bg-teal-200 rounded-md h-[20.5vh] w-[20vw] p-4 flex-col gap-5 justify-start items-start">
              <p className="text-white font-bold text-2xl m-0">
                DOCTORS ONDUTY
              </p>
              <p className="text-white font-bold text-[2rem] m-0">29</p>
            </div>
            <div className="flex bg-teal-200 rounded-md h-[20.5vh] w-[20vw] p-4 flex-col gap-5 justify-start items-start">
              <p className="text-white font-bold text-2xl m-0">
                LAST 30 DAYS PATIENTS
              </p>
              <p className="text-white font-bold text-[2rem] m-0">2156</p>
            </div>
            <div className="flex bg-teal-200 rounded-md h-[20.5vh] w-[20vw] p-4 flex-col gap-5 justify-start items-start">
              <p className="text-white font-bold text-2xl m-0">
                LAST MONTH COST
              </p>
              <p className="text-white font-bold text-[2rem] m-0">$357K</p>
            </div>
          </div>
        </div>
        <div className="h-[40vh] w-[84vw] rounded-xl border-2 border-black bg-azure mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center justify-between bg-teal-100 p-3 text-xl text-white font-inter font-bold rounded-t-[15px]">
              <div className="">PATIENT OVERVIEW</div>
              <div className="popup cursor-pointer" onClick={null}>
                <div className="popup-content">VIEW ALL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hospital;
