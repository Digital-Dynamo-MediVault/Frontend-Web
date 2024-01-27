import React, { useState } from "react";

function Newcase({ handleClosePopups }) {
    const [formData, setFormData] = useState({
        patientid: "",
        doctor: "",
        specialization: "",
        description: "",
        symptoms: "",
    });

    const doctorNames = [
        "Dr. Smith",
        "Dr. Johnson",
        "Dr. Williams",
        "Dr. Jones",
        "Dr. Brown",
        "Dr. Davis",
    ];

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
        // Add your logic for form submission here
        console.log("Form data submitted:", formData);
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
                    <div className=" ">
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-2 gap-x-[10vw] gap-y-[2vw] items-center justify-center py-4 px-[12vw]"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="patientid"
                                    className="font-inter font-bold text-[1.2rem]"
                                    style={{ textAlign: "left" }}
                                >
                                    PATIENT ID
                                </label>
                                <input
                                    type="text"
                                    id="patientid"
                                    name="patientid"
                                    value={formData.patientid}
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
                            <div className="flex flex-col items-center justify-center">
                                <label
                                    htmlFor="description"
                                    className="text-left font-inter font-bold text-[1.2rem]"
                                >
                                    DESCRIPTION
                                </label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={formData.description}
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
                                    {doctorNames.map((doctor, index) => (
                                        <option key={index} value={doctor}>
                                            {doctor}
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
