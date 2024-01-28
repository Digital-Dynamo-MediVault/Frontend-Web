import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../constants/routes.constant';

import HomePage from '../pages/home.page';

function Navigation({ isLoggedIn, onBoarding }) {

    console.log("onBoarding", onBoarding)

    return (
        <Router>


            <Routes>
                {
                    isLoggedIn &&
                    PRIVATE_ROUTES.map(route =>
                        <Route path={route.path} element={route.component} key={route.path} />
                    )
                }
                {
                    !isLoggedIn &&
                    PUBLIC_ROUTES.map(route =>
                        <Route path={route.path} element={route.component} key={route.path} />
                    )
                }
                {
                    isLoggedIn &&
                    <Route path="*" element={<Navigate to="/doctor" />} />
                }
                {
                    !isLoggedIn &&
                    <Route path="*" element={<Navigate to="/home" />} />
                }
            </Routes>

        </Router>
    )
}

export default Navigation