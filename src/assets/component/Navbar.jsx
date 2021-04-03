import React from "react";
// import { NavLink } from 'react-router-dom'; 
import Logo from "../image/logo.png"
import DashboardIcon from '@material-ui/icons/Dashboard';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const Navbar = () => {
    return(
        <React.Fragment>
            <nav className="navbar px-sm-4">
                <span className="navbar-icon"><DashboardIcon /></span>
                <span className="mr-auto navbar-text px-4">dashboard</span>
                <span><MailOutlineIcon /></span>
                <span className="mx-md-3 mx-2"><NotificationsNoneIcon /></span>
                <img src={Logo} alt="" className="img-fluid" />
            </nav>
        </React.Fragment>
    );
}

export default Navbar;