import React, { useState } from 'react'
import loginpage from "../assets/loginpage.svg"
import logo from "../assets/logo.svg"
import { apiUrl } from '../../constants/apiUrl';
import cookie from 'react-cookies'
import axios from 'axios';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {

        axios.post(`${apiUrl}/doctor/login`, { email, password }).then((res) => {
            if (res.status === 200) {
                cookie.save('metamaskAddress', res.data.user.metamaskAddress);
                window.location.href = "/doctor";
            }
        })
    }


    return (
        <div className=' overflow-y-hidden h-[100vh] flex bg-[#F7FDF8]'>
            <img src={loginpage} className="h-[100vh]" />
            <div className='flex flex-col justify-center items-center w-[80vw] gap-[8vh]'>
                <img src={logo} className='h-[6vh]' />
                <div className='w-[20vw] flex flex-col gap-4 items-center justify-center'>
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <label htmlFor="email" className='text-[black]  font-bold'>EMAIL</label>
                        <input type="text" className=' w-[15vw] border border-l-teal-300 h-[4vh] rounded-md' onChange={
                            (e) => {
                                setEmail(e.target.value);
                            }
                        }
                            value={email}
                            required
                            autoFocus
                            autoComplete="off"
                            spellCheck="false"
                        />
                    </div>
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <label htmlFor="password" className='text-[black]  font-bold'>PASSWORD</label>
                        <input type="password" className=' w-[15vw] border border-l-teal-300 h-[4vh] rounded-md' onChange={
                            (e) => {
                                setPassword(e.target.value);
                            }
                        }
                            value={password}
                            required />
                    </div>
                    <button className=' bg-teal-200 text-[white] h-[4vh] rounded-md w-[15vw] cursor-pointer hover:bg-teal-300 transition-all duration-300 ease-in-out' onClick={(e) => { e.preventDefault(); handleLogin() }} >LOGIN</button>

                </div>

            </div>
        </div >
    )
}

export default Login