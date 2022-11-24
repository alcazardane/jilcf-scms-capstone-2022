import React from "react";

/**
 * import necessary scripts
 */
import Navbar from './navbar_L1'

// IMPORT MAIN DASHBOARD AND ATTENDANCE MODULE FOR USER LEVEL 1 HERE
import MainDashboardL1 from '../../dashboard/dashboard_L1/main_Dashboard_L1'
// import WindowAttendance from './../window_attendance/windowAttendance'

// import image
import jilcf_logo from "../../../images/jilcf_logo_1.png"

/**
 * Styles
 */
import '../../../styles/mainWindow_styles.css'

export default function Home_L1() {
    var root = document.querySelector(":root");
  
    // For opening the dashboard window
    const openDashboard = () => {
        root.style.setProperty('--windowDashboard-L1-display', "block")
        root.style.setProperty('--display-b', "block")

        // Put codes to open Dashboard for User Level 1 here
    }

    // For opening the attendance window
    const openAttendance = () => {
        // root.style.setProperty('--windowAttendance-display', "block")

        // Put codes to open Attendance Module for User Level 1 here
    }
    
    return (
        <div>
            <div className="main_window_wrap l1_background">
                <div className="logo_wrap">
                    <div className="jilcf_logo">
                      <img src={jilcf_logo} alt="school_logo" />
                    </div>
                </div>
                <div className="main_window_button_wrap">
                    <div className="main_window_button_wrap_in">
                        <button className="main_window_button"></button>
                        <div className="button_label">Admin</div>
                    </div>
                    <div className="main_window_button_wrap_in">
                        <button className="main_window_button" onClick={openDashboard}></button>
                        <div className="button_label">Dashboard</div>
                    </div>
                    <div className="main_window_button_wrap_in">
                        <button className="main_window_button" onClick={openAttendance}></button>
                        <div className="button_label" >Attendance</div>
                    </div>
                    <div className="main_window_button_wrap_in">
                        <button className="main_window_button"></button>
                        <div className="button_label">Assessment</div>
                    </div>
                    <div className="main_window_button_wrap_in">
                        <button className="main_window_button"></button>
                        <div className="button_label">Analytics</div>
                    </div> 
                </div>
                <div className="windowDashboard_L1_main_wrap">
                  <MainDashboardL1 />
                </div>
                <div className="windowAttendance_main_wrap">
                  {/* <WindowAttendance /> */}
                </div>
            </div>
            <Navbar />
        </div>
    )
}