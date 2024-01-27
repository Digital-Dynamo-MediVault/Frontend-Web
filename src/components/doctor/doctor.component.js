import { useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

function Doctor() {
  const [frameCheckbox1Checked, setFrameCheckbox1Checked] = useState(true);

  const daysArray = Array.from({ length: 31 }, (_, index) => index + 1);
  const patArray = Array.from({ length: 7 }, (_, index) => index + 1);
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Sidebar />
      <div className="flex flex-col items-center justify-between">
        <Header />
        <div className="flex p-3">
          <div className="h-[35vh] rounded-2xl w-[55vw] bg-azure m-2">
            <div className="rounded-t-3xs mb-[2vh] justify-between h-[4vh] w-[54.8vw] bg-teal-100 flex items-start justify-between text-[1.2rem] text-white border-solid border-teal-200">
              <b className="mx-2">TODAYS PATIENT</b>
              <b className="mx-2">24th JAN 2024</b>
            </div>
            {patArray.map((pat) => (
              <div className="flex items-center justify-between">
                <input
                  className="h-[3vh] w-[3vw] relative rounded-8xs box-border z-[1] border-[1px] border-solid border-teal-100"
                  checked={frameCheckbox1Checked}
                  type="checkbox"
                  onChange={(event) =>
                    setFrameCheckbox1Checked(event.target.checked)
                  }
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="text-black font-medium">NAME</div>
                </div>
                <div className="text-black font-medium">
                  IDENTIFICATION NUMBER
                </div>
                <div className="text-black font-medium">LAST VISIT</div>
                <div className="text-black font-medium">STATUS</div>
                <div className="text-black font-medium">NEXT VISIT</div>
                <div className="text-black font-medium pr-4">RECENT TOPIC</div>
              </div>
            ))}
          </div>
          <div className="h-[30vh] w-[25vw] m-2 rounded-3xs bg-azure flex flex-col">
            <div className="rounded-t-3xs flex items-center justify-between h-[4vh] w-[24.8vw] bg-teal-100 flex items-start justify-between text-[1.2rem] text-white">
              <b className="mx-2">CALENDER</b>
              <b className="mx-2">JAN 2024</b>
            </div>
            <div className="m-5 grid grid-rows-5 grid-flow-col gap-3">
              {daysArray.map((day) => (
                <div
                  key={day}
                  className="h-[1.88rem] w-[1.88rem] relative rounded-8xs bg-azure-200 text-black box-border z-[1] border-[1px] border-solid border-teal-100"
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-azure box-border border border-solid border-teal-200 mb-5 h-[40vh] w-[50vw] rounded-xl mx-auto">
          <div className="h-[4vh] w-[50vw] items-center pl-4 rounded-t-3xs text-white font-medium bg-teal-100 box-border flex items-start justify-between ">
            PATIENT'S OBSERVATIONS
          </div>
          <div className="w-[45vw] h-[30vh]">Description</div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
