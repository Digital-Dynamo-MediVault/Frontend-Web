import axios from "axios";
import React, { useState } from "react";
import { apiUrl } from "../../../constants/apiUrl";

function Newpatient({ handleClosePopups }) {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        email: "",
        addressp: "",
        bloodGroup: "",
        guardian: "",
        guardianp: 0,
        phone: 0
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${apiUrl}/patient/addpatient`, formData).then((res) => {
            console.log(res);
            handleClosePopups();
        })
        // Add your logic for form submission here
        console.log("Form data submitted:", formData);
    };

    return (
        <div className="absolute h-screen w-screen backdrop-filter backdrop-blur-sm bg-opacity-10 z-10">
            <div className="absolute z-10 top-[20vh] left-[27%] backdrop-filter backdrop-blur-sm bg-opacity-10">
                <div className="w-[60vw]  bg-azure rounded-[15px]">
                    <div className="flex items-center justify-between bg-teal-300 p-3 text-2xl text-white font-bold rounded-t-[15px]">
                        <div className="">New Patient</div>
                        <div className="popup cursor-pointer" onClick={handleClosePopups}>
                            <div className="popup-content">X</div>
                        </div>
                    </div>
                    <div className=" ">
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-2 gap-x-[10vw] gap-y-[2vw] items-center justify-center py-4 px-[12vw]"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="name"
                                    className="font-inter font-bold text-[1.2rem]"
                                    style={{ textAlign: "left" }}
                                >
                                    NAME
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="h-[4vh] w-[15vw] border border-black rounded-md"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="age"
                                    className="text-left font-inter font-bold text-[1.2rem]"
                                >
                                    AGE
                                </label>
                                <input
                                    type="text"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="h-[4vh] w-[15vw] border border-black rounded-md"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="gender"
                                    className="text-left font-inter font-bold text-[1.2rem]"
                                >
                                    GENDER
                                </label>
                                <input
                                    type="text"
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="h-[4vh] w-[15vw] border border-black rounded-md"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="email"
                                    className="text-left font-inter font-bold text-[1.2rem]"
                                >
                                    EMAIL
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="h-[4vh] w-[15vw] border border-black rounded-md"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="phone"
                                    className="text-left font-inter font-bold text-[1.2rem]"
                                >
                                    PHONE
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="h-[4vh] w-[15vw] border border-black rounded-md"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="addressp"
                                    className="text-left font-inter font-bold text-[1.2rem]"
                                >
                                    ADDRESS
                                </label>
                                <input
                                    type="text"
                                    id="addressp"
                                    name="addressp"
                                    value={formData.addressp}
                                    onChange={handleChange}
                                    className="h-[4vh] w-[15vw] border border-black rounded-md"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="bloodGroup"
                                    className="text-left font-inter font-bold text-[1.2rem]"
                                >
                                    BLOOD GROUP
                                </label>
                                <input
                                    type="text"
                                    id="bloodGroup"
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleChange}
                                    className="h-[4vh] w-[15vw] border border-black rounded-md"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="guardian"
                                    className="text-start font-inter font-bold text-[1.2rem]"
                                >
                                    GUARDIAN NAME
                                </label>
                                <input
                                    type="text"
                                    id="guardian"
                                    name="guardian"
                                    value={formData.guardian}
                                    onChange={handleChange}
                                    className="h-[4vh] w-[15vw] border border-black rounded-md"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="guardianp"
                                    className="text-left font-inter font-bold text-[1.2rem]"
                                >
                                    GUARDIAN CONTACT
                                </label>
                                <input
                                    type="tel"
                                    id="guardianp"
                                    name="guardianp"
                                    value={formData.guardianp}
                                    onChange={handleChange}
                                    className="h-[4vh] w-[15vw] border border-black rounded-md"
                                />
                            </div>

                            <button
                                type="submit"
                                className="col-span-2 bg-[#2A7D88] mx-auto my-4 rounded text-white py-2 w-[15vw]"
                            >
                                <div className="font-inter font-bold tex-white text-[1.5rem]">
                                    Submit
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newpatient;
