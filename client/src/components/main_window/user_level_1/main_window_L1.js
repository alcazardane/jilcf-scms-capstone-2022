import React from "react";
import { useState, useRef } from "react";

/**
 * import necessary scripts
 */
import Navbar from './navbar_L1'

// IMPORT MAIN DASHBOARD AND ATTENDANCE MODULE FOR USER LEVEL 1 HERE
import MainDashboardL1 from '../../dashboard/dashboard_L1/main_Dashboard_L1'
import WindowAttendanceL1 from "../../window_attendance/window_attendance_L1";
import AdminModule from "../../admin_module/admin_module";
import useWindowDimensions from "../../dashboard/hooks/useWindowDimensions";
// import WindowAttendance from './../window_attendance/windowAttendance'

// import image
import jilcf_logo from "../../../images/jilcf_logo_1.png"
import admin_icon from "../../../images/supervisor_account_FILL0_wght400_GRAD0_opsz48.png"
import dashboard_icon from "../../../images/dashboard.png"
import analytics_icon from "../../../images/analytics.png"
import attendance_icon from "../../../images/attendance.png"

/**
 * Styles
 */
import '../../../styles/mainWindow_styles.css'

export default function Home_L1() {

    var root = document.querySelector(":root");
    const { height, width } = useWindowDimensions();
  
    const [dashboardIsOpen, setDashboardIsOpen] = useState(true);
    const [adminIsOpen, setAdminIsOpen] = useState(false);
    const [attendanceIsOpen, setAttendanceIsOpen] = useState(false);
    const [analyticsIsOpen, setAnalyticsIsOpen] = useState(false);

//=======================================================================================================================
// DASHBOARD
    // For opening the dashboard
    const openDashboard = () => {

        // window.history.pushState('new', 'title', 'user_dashboard');

        root.style.setProperty('--windowDashboard-L1-display', "block")
        root.style.setProperty('--adminModule_L1_display', "none")
        root.style.setProperty('--windowAttendance-L1-display', "none")
        //root.style.setProperty('--display-b', "block")
        setDashboardIsOpen(true);

        setAttendanceIsOpen(false);
        setAdminIsOpen(false);
        setAnalyticsIsOpen(false)
    }

    const[dashUpcomingIsOpen, setDashUpcomingIsOpen] = useState(true);
    const[dashAccountsIsOpen, setDashAccountsIsOpen] = useState(false);
    const[dashAnalyticsIsOpen, setDashAnalyticsIsOpen] = useState(false);

    const dashUpRef = useRef(null);
    const dashAccRef = useRef(null);
    const dashAnaRef = useRef(null);

    const showDashUpcoming = () => {
        setDashUpcomingIsOpen(true);
        setDashAccountsIsOpen(false);
        setDashAnalyticsIsOpen(false);
    }
    const showDashAccounts = () => {
        setDashUpcomingIsOpen(false);
        setDashAccountsIsOpen(true);
        setDashAnalyticsIsOpen(false);
    }
    const showDashAnalytics = () => {
        setDashUpcomingIsOpen(false);
        setDashAccountsIsOpen(false);
        setDashAnalyticsIsOpen(true);
    }

    let dash_top_margin = height * 0.025;
    //console.log(top_margin);

    const scrollDashSection = (elemRef) => {
        document.getElementById("dashboard_L1_Main_Container").scrollTo({
            top: elemRef.current.offsetTop - dash_top_margin,
            behavior: "smooth"
        })

        if (elemRef === dashUpRef){
            showDashUpcoming();
        }
        else if (elemRef === dashAccRef){
            showDashAccounts();
        }
        else if (elemRef === dashAnaRef){
            showDashAnalytics();
        }
    }

//=======================================================================================================================
// ADMIN MODULE
    // For opening the admin module
    const openAdminModule = () => {
        root.style.setProperty('--adminModule_L1_display', "block")
        root.style.setProperty('--windowDashboard-L1-display', "none")
        root.style.setProperty('--windowAttendance-L1-display', "none")
        //root.style.setProperty('--adminModule-display-b', "block")

        setAdminIsOpen(true);

        setDashboardIsOpen(false);
        setAttendanceIsOpen(false);
        setAnalyticsIsOpen(false)
    }

    const[adminAccIsOpen, setAdminAccIsOpen] = useState(true);
    const[adminSchedIsOpen, setAdminSchedIsOpen] = useState(false);
    const[adminAnnIsOpen, setAdminAnnIsOpen] = useState(false);

    const adminAccRef = useRef(null);
    const adminSchedRef = useRef(null);
    const adminAnnRef = useRef(null);

    const showAdminAcc = () => {
        setAdminAccIsOpen(true);
        setAdminSchedIsOpen(false);
        setAdminAnnIsOpen(false);
    }
    const showAdminSched = () => {
        setAdminAccIsOpen(false);
        setAdminSchedIsOpen(true);
        setAdminAnnIsOpen(false);
    }
    const showAdminAna = () => {
        setAdminAccIsOpen(false);
        setAdminSchedIsOpen(false);
        setAdminAnnIsOpen(true);
    }

    const scrollAdminSection = (elemRef) => {
        document.getElementById("adminModule_L1_Main_Container").scrollTo({
            top: elemRef.current.offsetTop - dash_top_margin,
            behavior: "smooth"
        })

        if (elemRef === adminAccRef){
            showAdminAcc();
        }
        else if (elemRef === adminSchedRef){
            showAdminSched();
        }
        else if (elemRef === adminAnnRef){
            showAdminAna();
        }
    }

//=======================================================================================================================
// ATTENDANCE MODULE
    // For opening the attendance module
    const openAttendance = () => {
        root.style.setProperty('--windowAttendance-L1-display', "block")
        root.style.setProperty('--adminModule_L1_display', "none")
        root.style.setProperty('--windowDashboard-L1-display', "none")

        setAttendanceIsOpen(true);

        setDashboardIsOpen(false);
        setAdminIsOpen(false);
        setAnalyticsIsOpen(false)
    }

//=======================================================================================================================
// ANALYTICS MODULE
    // For opening the analytics module
    const openAnalytics = () => {
        setAnalyticsIsOpen(true);

        setAdminIsOpen(false);
        setDashboardIsOpen(false);
        setAttendanceIsOpen(false);
    }
    
    return (
        <div>
            <div className="main_window_wrap l1_background">

                <div className="main_window_L1_sidebar">

                    <div className="main_window_L1_sidebar_LOGO_wrap">
                        <div className="main_window_L1_sidebar_LOGO">
                            <img className="main_window_L1_sidebar_LOGO_img" src={jilcf_logo} alt="school_logo" />
                            <span className="main_window_L1_sidebar_LOGO_label">JILCF SCMS</span>
                        </div>
                    </div>

                    <div className="main_window_L1_sidebar_inside_wrap">
                        <div 
                            className={"main_window_L1_sidebar_module_wrap " + (dashboardIsOpen ? "sidebar_wrap_active" : "")} 
                            onClick={openDashboard}>
                            <img className="main_window_L1_sidebar_module_icon" src={dashboard_icon} alt="Dashboard"></img>
                            <div className="main_window_L1_sidebar_module_label">Dashboard</div>
                        </div>
                        <div className={(dashboardIsOpen ? "sidebar_sub_wrap_active" : "sidebar_sub_wrap_inactive")}>
                            <div 
                                className={"sidebar_sub_item " + (dashUpcomingIsOpen ? "sidebar_sub_item_active" : "")}
                                onClick={() => scrollDashSection(dashUpRef)}                                  
                                >Upcoming</div>
                            <div 
                                className={"sidebar_sub_item " + (dashAccountsIsOpen ? "sidebar_sub_item_active" : "")}
                                onClick={() => scrollDashSection(dashAccRef)}
                                >Accounts</div>
                            <div 
                                className={"sidebar_sub_item " + (dashAnalyticsIsOpen ? "sidebar_sub_item_active" : "")}
                                onClick={() => scrollDashSection(dashAnaRef)}
                                >Analytics</div>
                        </div>

                        <div 
                            className={"main_window_L1_sidebar_module_wrap " + (adminIsOpen ? "sidebar_wrap_active" : "")} 
                            onClick={openAdminModule}>
                            <img className="main_window_L1_sidebar_module_icon adminIcon" src={admin_icon} alt="Admin"></img>
                            <div className="main_window_L1_sidebar_module_label">Admin</div>
                        </div>
                        <div className={(adminIsOpen ? "sidebar_sub_wrap_active" : "sidebar_sub_wrap_inactive")}>
                            <div 
                                className={"sidebar_sub_item " + (adminAccIsOpen ? "sidebar_sub_item_active" : "")}
                                onClick={() => scrollAdminSection(adminAccRef)}                                  
                                >Accounts</div>
                            <div 
                                className={"sidebar_sub_item " + (adminSchedIsOpen? "sidebar_sub_item_active" : "")}
                                onClick={() => scrollAdminSection(adminSchedRef)}
                                >Schedules</div>
                            <div 
                                className={"sidebar_sub_item " + (adminAnnIsOpen ? "sidebar_sub_item_active" : "")}
                                onClick={() => scrollAdminSection(adminAnnRef)}
                                >Announcements</div>
                        </div>

                        <div 
                            className={"main_window_L1_sidebar_module_wrap " + (attendanceIsOpen ? "sidebar_wrap_active" : "")}
                            onClick={openAttendance}>
                            <img className="main_window_L1_sidebar_module_icon" src={attendance_icon} alt="Attendance"></img>
                            <div className="main_window_L1_sidebar_module_label">Attendance</div>
                        </div>

                        {/* <div 
                            className="main_window_L1_sidebar_module_wrap"
                            onClick={openAttendance}>
                            <div className="main_window_L1_sidebar_module_icon"></div>
                            <div className="main_window_L1_sidebar_module_label">Assessment</div>
                        </div> */}

                        <div 
                            className={"main_window_L1_sidebar_module_wrap " + (analyticsIsOpen ? "sidebar_wrap_active" : "")}
                            onClick={openAnalytics}>
                            <img className="main_window_L1_sidebar_module_icon" src={analytics_icon} alt="Analytics"></img>
                            <div className="main_window_L1_sidebar_module_label">Analytics</div>
                        </div>
                    </div>
                </div>

                <div className="windowDashboard_L1_main_wrap">
                  <MainDashboardL1 
                  dashUpRef={dashUpRef}
                  dashAccRef={dashAccRef}
                  dashAnaRef={dashAnaRef}/>
                </div>

                <div className="windowAttendance_L1_main_wrap">
                  <WindowAttendanceL1 />
                </div>

                <div className="adminModule_L1_main_wrap">
                  <AdminModule 
                  adminAccRef={adminAccRef}
                  adminSchedRef={adminSchedRef}
                  adminAnnRef={adminAnnRef}/>
                </div>


            </div>
            <Navbar />
        </div>
    )
}