import axios from "axios";
import React, { useState } from "react";
import { apiUrl } from "../../../constants/apiUrl";

function NewDoctor({ handleClosePopups }) {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        email: "",
        address: "",
        degree: "",
        exprience: "",
        specialization: "",
        phone: 0
    });

    const specializations = [
        "Cardiologist",
        "General Surgeon",
        "Dermatologist",
        "Orthopedic Surgeon",
        "Pediatrician",
        "Ophthalmologist",
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${apiUrl}/doctor/adddoctor`, formData).then((res) => {
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
                        <div className="">NEW DOCTOR</div>
                        <div className="popup cursor-pointer" onClick={handleClosePopups}>
                            <div className="popup-content">X</div>
                        </div>
                    </div>
                    <div className=" ">
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-2 gap-x-[8vw] gap-y-[2vw] items-center justify-center py-4 px-[12vw]"
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
                                    type="phone"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="h-[4vh] w-[15vw] border border-black rounded-md"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="address"
                                    className="text-left font-inter font-bold text-[1.2rem]"
                                >
                                    ADDRESS
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="h-[4vh] w-[15vw] border border-black rounded-md"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="degree"
                                    className="text-left font-inter font-bold text-[1.2rem]"
                                >
                                    DEGREE
                                </label>
                                <input
                                    type="text"
                                    id="degree"
                                    name="degree"
                                    value={formData.degree}
                                    onChange={handleChange}
                                    className="h-[4vh] w-[15vw] border border-black rounded-md"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="exprience"
                                    className="text-start font-inter font-bold text-[1.2rem]"
                                >
                                    YEARS OF EXPERIENCE
                                </label>
                                <input
                                    type="number"
                                    id="exprience"
                                    name="exprience"
                                    value={formData.exprience}
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
                                    onChange={(e) => handleChange(e)}
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

                            <button
                                type="submit"
                                className="col-span-2 bg-[#2A7D88] mx-auto my-4 rounded text-white py-2 w-[15vw]"
                            >
                                <div className="font-inter font-bold tex-white text-[1.5rem]">
                                    SAVE
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewDoctor;
