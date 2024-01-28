import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/AdminHeader";
import money from "../assets/money.svg";
import { apiUrl } from "../../constants/apiUrl";
import axios from "axios";
function Hospital() {
  const [allPatient, setAllPatient] = useState([])
  useEffect(() => {
    const fetchPatients = async () => {

      axios.get(`${apiUrl}/patient/`).then((res) => {
        setAllPatient(res.data.user);
        console.log(res.data.user);

      }).catch((err) => {
        console.log(err);
      })

    }

    fetchPatients();
  }, []);
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
        <div className="flex p-3 items-center justify-center">
          <div className="h-[47vh] rounded-2xl w-full bg-azure m-2">
            <div className="rounded-t-3xs items-center mb-[2vh] h-[4vh] w-full bg-teal-100 flex justify-between text-[1.2rem] text-white border-solid border-teal-200">
              <div className="flex justify-center items-center">

                <b className="mx-2">ALL PATIENTS</b>
              </div>

            </div>
            <table className="w-full border-collapse h-[40vh]">
              <thead>
                <tr className="bg-teal-100 text-white">
                  {/* <th className="py-2 px-4 border border-teal-200">Attended</th> */}
                  <th className="py-2 px-4 border border-teal-200">Name</th>
                  <th className="py-2 px-4 border border-teal-200">ID</th>
                  <th className="py-2 px-4 border border-teal-200">Age</th>
                  <th className="py-2 px-4 border border-teal-200">Blood Group</th>
                  <th className="py-2 px-4 border border-teal-200">Gender</th>
                </tr>
              </thead>
              <tbody>
                {
                  allPatient.length > 0 && allPatient.reverse().map((pat, index) => {
                    const rowColor = index % 2 === 0 ? 'bg-gray-100' : 'bg-white'; // Alternate row colors

                    return (
                      <tr key={pat.pId} className={`border-t border-teal-200 ${rowColor}`}>
                        {/* Patient information */}
                        {/* <td className="py-2 px-4 border border-teal-200">{pat.attended ? "Attended" : "Not Attended"}</td> */}
                        <td className="py-2 px-4 border border-teal-200">

                          {pat.name}

                        </td>
                        <td className="py-2 px-4 border border-teal-200">{pat.pId}</td>
                        <td className="py-2 px-4 border border-teal-200">{pat.age}</td>
                        <td className="py-2 px-4 border border-teal-200">{pat.bloodGroup}</td>
                        <td className="py-2 px-4 border border-teal-200">{pat.gender}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>


          </div>

        </div>
      </div>
    </div>
  );
}

export default Hospital;
