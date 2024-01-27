import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

function Appointment() {
  const patArray = Array.from({ length: 9 }, (_, index) => index + 1);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-row m-4 items-center justify-between">
          <div className="flex flex-col">
            <div className="h-[73vh] w-[26vw] bg-azure rounded-2xl border-solid border-teal-200 text-[1.2rem] flex flex-col items-start mb-3">
              <div className="flex flex-col">
                <div className="h-[5vh] w-[26vw] bg-teal-200 rounded-t-xl flex items-center justify-between text-white text-[1.1rem]">
                  <b className="mx-3">UPCOMING VISITS</b>
                  <b className="mx-3">SEE ALL</b>
                </div>
                {patArray.map((pat) => (
                  <div className="flex items-center justify-start px-3 box-border gap-3 m-3">
                    <img
                      className="h-[5vh] w-[3vw] rounded-full object-cover "
                      alt=""
                      // src="" Add image path
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pb-1 box-border">
                      <div className="flex flex-col items-start justify-start gap-[7px]">
                        <b className="text-[1rem]">NAME</b>
                        <div className="flex flex-row items-start justify-start gap-[12px] text-[0.7rem]">
                          <b className="">MALE</b>
                          <b className="">FEVER</b>
                          <b className="">20-12-2020</b>
                        </div>
                      </div>
                    </div>
                    <b className="text-[1rem]">VIEW ALL</b>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[8vh] w-[25vw] p-3 bg-azure rounded-xl border-solid border-teal-200 text-[1.2rem] flex flex-col items-start">
              <b>GLOBAL HEALTH DATA</b>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="h-[4vh] w-[18vw] rounded-xl bg-azure border-solid border-teal-200 m-2 text-teal-100 font-bold text-[1.2rem] pl-2"
                    placeholder="SEARCH"
                  />
                </div>
                <div className="h-[4vh] w-[5vw] bg-teal-300 flex items-center justify-center rounded-xl font-bold text-[1.2rem] text-white">
                  GO
                </div>
              </div>
            </div>
          </div>
          <div className="h-[85vh] w-[56vw] bg-azure rounded-2xl border-solid border-teal-200 text-[1.2rem] flex flex-col items-start mb-3">
            <div className="h-[4vh] w-[54.4vw] p-3 bg-teal-200 rounded-t-xl border-solid border-teal-200 text-[1.2rem] flex flex-col items-start">
              <div className="flex items-center justify-between gap-[29vw]">
                <div className="flex items-center ]">
                  <img
                    className="ml-5 h-[4.5vh] w-[2.5vw] rounded-full object-cover "
                    alt=""
                    // src="" Add image path
                  />
                  <b className="text-white text-[1.2rem] ml-4">
                    KISHU RAJ TYAGI
                  </b>
                </div>
                <b className="text-white text-[1.2rem] ml-4">
                  10:00 - 11:00 AM
                </b>
              </div>
              <div className="mt-10 ml-3 mb-3 flex gap-[3vh]">
                <textarea
                  className="h-[70vh] w-[35vw] bg-[#bbd7da] rounded-2xl border-solid border-teal-200 text-[1.2rem] flex flex-col items-start mb-3 p-3"
                  placeholder="Workable Area"
                />

                <div className="flex flex-col gap-4">
                  <div className="h-[25vh] w-[15vw] bg-[#bbd7da] rounded-2xl border-solid border-teal-200 text-[1.2rem] flex flex-col items-start">
                    Basic Details
                  </div>
                  <div className="h-[43vh] w-[15vw] bg-[#bbd7da] rounded-2xl border-solid border-teal-200 text-[1.2rem] flex flex-col items-start">
                    previous appointment details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
