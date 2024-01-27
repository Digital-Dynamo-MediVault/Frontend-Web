import React, { useState } from "react";
import { apiUrl, contractAddress } from "../../../constants/apiUrl";
import axios from "axios";
import { Web3 } from 'web3';
import contractABI from '../../../constants/abi.json';


function Newcase({ handleClosePopups }) {
  const [formData, setFormData] = useState({
    pId: "",
    doctor: "",
    specialization: "",
    problemDescription: "",
    symptoms: "",
  });

  const [specialization, setSpecialization] = useState('');
  const [doctorData, setDoctorData] = useState(null);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);
    axios.post(`${apiUrl}/case/newcase`, formData).then((res) => {
      // console.log(res);
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
              data: contractInstance.methods.addCase(
                res.data.data.pId,
                res.data.data.cId,
                res.data.data.specialization,
                res.data.data.problemDescription,
                res.data.data.doctor,
                res.data.data.symptoms,
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
                handleClosePopups();
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
    })
  };

  return (
    <div className="absolute h-screen w-screen backdrop-filter backdrop-blur-sm bg-opacity-10 z-10">
      <div className="absolute z-10 top-[20vh] left-[27%] backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="w-[60vw]  bg-azure rounded-[15px]">
          <div className="flex items-center justify-between bg-teal-300 p-3 text-2xl text-white font-bold rounded-t-[15px]">
            <div className="">NEW CASE</div>
            <div className="popup cursor-pointer" onClick={handleClosePopups}>
              <div className="popup-content">x</div>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-2 gap-x-[10vw] gap-y-[2vw] items-center justify-center py-4 px-[12vw]"
            >
              <div className="flex flex-col items-center justify-center">
                <label
                  htmlFor="pId"
                  className="font-inter font-bold text-[1.2rem]"
                  style={{ textAlign: "left" }}
                >
                  PATIENT ID
                </label>
                <input
                  type="text"
                  id="pId"
                  name="pId"
                  value={formData.pId}
                  onChange={handleChange}
                  className="h-[4vh] w-[15vw] border border-black rounded-md"
                />
              </div>

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
                  value={formData.specialization}
                  onChange={(e) => {
                    handleChange(e)
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
                  htmlFor="problemDescription"
                  className="text-left font-inter font-bold text-[1.2rem]"
                >
                  DESCRIPTION
                </label>
                <input
                  type="text"
                  id="problemDescription"
                  name="problemDescription"
                  value={formData.problemDescription}
                  onChange={handleChange}
                  className="h-[4vh] w-[15vw] border border-black rounded-md"
                />
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
                  value={formData.doctor}
                  onChange={(e) => handleChange(e)}
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

              <div className="flex flex-col items-center justify-center">
                <label
                  htmlFor="symptoms"
                  className="text-left font-inter font-bold text-[1.2rem]"
                >
                  SYMPTOMS
                </label>
                <textarea
                  placeholder="ENTER SYMPTOMS"
                  type="text"
                  id="symptoms"
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
                  className="h-[20vh] w-[40vw] mx-auto my-4 border border-black rounded-md"
                />
              </div>

              <button
                type="submit"
                className="col-span-2 bg-[#2A7D88] mx-auto my-4 rounded text-white py-2 w-[15vw]"
              >
                <div className="font-inter font-bold tex-white text-[1.5rem]">
                  Assign
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newcase;
