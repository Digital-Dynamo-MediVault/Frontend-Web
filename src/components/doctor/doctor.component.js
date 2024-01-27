import { useState, useEffect } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import axios from "axios";
import { apiUrl, contractAddress } from "../../constants/apiUrl";
import { Web3 } from 'web3';
import contractABI from '../../constants/abi.json';

function Doctor() {
  const [formData, setFormData] = useState()


  const daysArray = Array.from({ length: 31 }, (_, index) => index + 1);
  const [patientArray, setPatientArray] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const handleButtonClick = (patient) => {
    setSelectedPatient(patient);
    setIsPopupOpen(true);
  };
  const [specialization, setSpecialization] = useState('');
  const [doctorData, setDoctorData] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const handleSpecializationChange = async (event) => {
    const newSpecialization = event.target.value;
    setSpecialization(newSpecialization);

    try {
      const response = await axios.post(`${apiUrl}/case/doctor`, { specialization: newSpecialization });
      setDoctorData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setDoctorData(null);
    }
  };

  const specializations = [
    "Cardiologist",
    "General Surgeon",
    "Dermatologist",
    "Orthopedic Surgeon",
    "Pediatrician",
    "Ophthalmologist",
    "Pharmacist"
  ];

  useEffect(() => {
    // Make an API call to fetch patient data
    const fetchData = async () => {
      try {
        window.ethereum.request({ method: 'eth_requestAccounts' }).then(async function (accounts) {
          const response = await axios.get(`${apiUrl}/case/patient/${accounts[0]}`); // Replace with your actual API endpoint
          setPatientArray(response.data.data);
          console.log(patientArray)

        })
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchData();
  }, []);

  const [prescriptionText, setPrescriptionText] = useState('');
  const handleSendData = async () => {
    try {
      // Make API call to send data to MongoDB
      await axios.post(`${apiUrl}/case/newcase`, { pId: selectedPatient.pId, specialization: specialization, doctor: selectedDoctor, prescription: prescriptionText, symptoms: selectedPatient.symptoms, problemDescription: selectedPatient.problemDescription, attended: true }).then((res) => {
        console.log(res)
        if (res.status === 200) {
          window.ethereum.request({ method: 'eth_requestAccounts' }).then(async function (accounts) {
            console.log(accounts[0]);
            // axios.post(`${apiUrl}/patient/activate`, { email: queryParams.get('email'), password: password, metamaskAddress: accounts[0] }).then(async function (response) {
            //   console.log(response.data.user);
            try {
              // Request account access if needed
              const web3 = new Web3(new Web3.providers.HttpProvider(`https://polygonzkevm-testnet.g.alchemy.com/v2/lsmKHpFVS4DmS_WzTTQd1S_aXgc5jRBZ`));


              const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
              await window.ethereum.enable();



              const nonce = await web3.eth.getTransactionCount(accounts[0], 'pending');
              const gasPrice = await web3.eth.getGasPrice();
              const gasLimit = 28500000;
              console.log("res", res.data.data.pId)
              const rawTransaction = {
                from: accounts[0],
                nonce: '0x' + nonce.toString(16),
                gasPrice: '0x' + parseInt(gasPrice).toString(16),
                gasLimit: '0x' + parseInt(gasLimit).toString(16),
                to: contractAddress,
                value: '0x0',
                data: contractInstance.methods.addPrescription(
                  res.data.data.pId,
                  res.data.data.cId,
                  res.data.data.doctor,
                  res.data.data.prescription,
                ).encodeABI(),
              };

              // Sign transaction with MetaMask
              const signedTransaction = await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [rawTransaction],
              });

              console.log('Transaction sent to MetaMask. Please confirm in MetaMask.');

              // Wait for the transaction receipt with a timeout of 3 minutes (adjust as needed)
              const timeout = 180000; // 3 minutes in milliseconds
              const startTime = Date.now();

              let receipt;

              while (Date.now() - startTime < timeout) {
                try {
                  receipt = await web3.eth.getTransactionReceipt(signedTransaction);
                } catch (error) {
                  console.error('Error fetching transaction receipt:', error);
                }

                if (receipt) {
                  console.log('Transaction receipt:', receipt);
                  setIsPopupOpen(false);
                  break; // Exit the loop if receipt is found
                } else {
                  await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 1 second before checking again
                }
              }

              if (!receipt) {
                console.error('Transaction not found within the timeout period.');
              }
            } catch (error) {
              console.error('Error interacting with contract:', error);
            }
          })
          // })


        } else {
          alert("Error creating case.");
        }
      });

      // Close the popup after sending data

      // Optionally, you may want to update the state or perform additional actions
    } catch (error) {
      console.error('Error sending prescription:', error);
      // Handle error if needed
    }
  };
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <Sidebar />
      <div className="flex flex-col items-center justify-start">
        <Header />
        <div className="flex p-3">
          <div className="h-[35vh] rounded-2xl w-[55vw] bg-azure m-2">
            <div className="rounded-t-3xs items-center mb-[2vh] h-[4vh] w-[54.8vw] bg-teal-100 flex justify-between text-[1.2rem] text-white border-solid border-teal-200">
              <b className="mx-2">TODAYS PATIENT</b>
              <b className="mx-2">24th JAN 2024</b>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-teal-100 text-white">
                  <th className="py-2 px-4 border border-teal-200">Name</th>
                  <th className="py-2 px-4 border border-teal-200">ID</th>
                  <th className="py-2 px-4 border border-teal-200">Age</th>
                  <th className="py-2 px-4 border border-teal-200">Blood Group</th>
                  <th className="py-2 px-4 border border-teal-200">Gender</th>
                </tr>
              </thead>
              <tbody>
                {patientArray.map((pat) => {
                  pat.prescription && setPrescriptionText(pat.prescription)
                  return (
                    <tr key={pat.pId} className="border-t border-teal-200">
                      {/* Patient information */}
                      <td className="py-2 px-4 border border-teal-200">
                        <button
                          className="text-black font-medium focus:outline-none"
                          onClick={() => handleButtonClick(pat)}
                        >
                          {pat.patientData.name}
                        </button>
                      </td>
                      <td className="py-2 px-4 border border-teal-200">{pat.pId}</td>
                      <td className="py-2 px-4 border border-teal-200">{pat.patientData.age}</td>
                      <td className="py-2 px-4 border border-teal-200">{pat.patientData.bloodGroup}</td>
                      <td className="py-2 px-4 border border-teal-200">{pat.patientData.gender}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            {/* Popup */}
            {isPopupOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg">
                  {/* Popup content */}
                  <h2 className="text-black font-medium">{selectedPatient?.patientData.name}'s Details</h2>
                  <div>
                    <p><b>Extra Symptoms:</b> {selectedPatient?.extraSymptom.join(', ')}</p>
                    <p><b> Problem Description:</b>  {selectedPatient?.problemDescription}</p>
                    <p><b> Symptoms:</b>  {selectedPatient?.symptoms}</p>
                    {/* Prescription textarea */}
                    <textarea
                      className="w-full h-20  border border-gray-300 rounded-md mt-2"
                      placeholder="Type prescription here..."
                      value={prescriptionText}
                      onChange={(e) => setPrescriptionText(e.target.value)}
                    />
                    {/* Send Data button */}
                    <div className="flex flex-col items-center justify-center">
                      <label
                        htmlFor="specialization"
                        className="text-left font-inter font-bold text-[1.2rem]"
                      >
                        SPECIALIZATION
                      </label>
                      <select
                        id="specialization"
                        name="specialization"
                        value={specialization}
                        onChange={(e) => {
                          setSpecialization(e.target.value);
                          handleSpecializationChange(e)
                        }}
                        className="h-[4vh] w-[15vw] border border-black rounded-md"
                      >
                        <option value="">Specialization</option>
                        {specializations.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <label
                        htmlFor="doctor"
                        className="text-left font-inter font-bold text-[1.2rem]"
                      >
                        DOCTOR
                      </label>
                      <select
                        id="doctor"
                        name="doctor"
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                        className="h-[4vh] w-[15vw] border border-black rounded-md"
                      >
                        <option value="">Select a doctor</option>
                        {doctorData && doctorData.map((doctor, index) => (
                          <option key={index} value={doctor.metamaskAddress}>
                            {doctor.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex gap-4 items-center justify-center">
                      <button
                        className="mt-2 px-4 py-2 bg-teal-100 text-white rounded-lg focus:outline-none"
                        onClick={handleSendData}
                      >
                        Send Prescription
                      </button>
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
            )}
          </div>
          {/* <div className="h-[30vh] w-[25vw] m-2 rounded-3xs bg-azure flex flex-col">
            <div className="rounded-t-3xs  h-[4vh] w-[24.8vw] bg-teal-100 flex items-start justify-between text-[1.2rem] text-white">
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
          </div> */}
        </div>
        {/* <div className="bg-azure box-border border border-solid border-teal-200 mb-5 h-[40vh] w-[50vw] rounded-xl mx-auto">
          <div className="h-[4vh] w-[50vw]  pl-4 rounded-t-3xs text-white font-medium bg-teal-100 box-border flex items-start justify-between ">
            PATIENT'S OBSERVATIONS
          </div>
          <div className="w-[45vw] h-[30vh]">Description</div>
        </div> */}
      </div>
    </div>
  );
}

export default Doctor;
