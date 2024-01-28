import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import background from "../assets/landing.svg";

const HomePage = () => {
  const imageStyle = {
    width: "100%",
    objectFit: "cover",
  };

  return (
    <div className="bg-azure flex flex-col">
      <div className="h-[10vh] w-[100vw] bg-white flex items-center justify-between">
        <img src={logo} className="h-[10vh] w-[13vw]" />
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="h-[6vh] w-[10vw] bg-teal-300 rounded-xl flex items-center justify-center font-bold font-inter text-white text-[1.5rem]">
            LOGIN
          </button>
        </Link>
      </div>
      <img
        src={background}
        style={imageStyle}
        alt="Landing Background"
        loading="lazy"
        className="pb-10"
      />
      <section className="bg-gray flex items-center justify-start pt-[2.19rem] px-[2.19rem] pb-[5.69rem] box-border gap-[22.25rem] text-left text-[3.2rem] text-white font-inter">
        <footer className="h-[18.31rem] w-[94.5rem] relative bg-gray hidden" />
        <div className="flex flex-col items-start justify-start gap-[1.56rem]">
          <div className="flex flex-row items-center justify-start gap-[1.06rem]">
            <img
              className="h-[6vh] w-[15vw] relative z-[1]"
              alt=""
              src={logo}
            />
          </div>
          <div className="w-[18.5rem] relative text-[0.96rem] inline-block z-[1]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</div>
        </div>
        <div className="w-[27rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-[0.96rem]">
          <div className="flex flex-col items-start justify-start gap-[0.94rem]">
            <div>Company</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Features</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.94rem]">
            <div>Services</div>
            <div>Patients</div>
            <div>Hospital</div>
            <div>Doctors</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
