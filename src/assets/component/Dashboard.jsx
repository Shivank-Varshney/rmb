import React from "react";
import Navbar from "./Navbar";
import { NavLink } from 'react-router-dom';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import LayersIcon from '@material-ui/icons/Layers';
import SpeedIcon from '@material-ui/icons/Speed';

const Dashboard = () => {
    return(
        <React.Fragment>
            <Navbar />
            <section className="container-fluid" id="dashboard">
                <div className="row">
                    <div className="col">
                        <div className="container-fluid px-sm-3 px-0">
                            <div className="row inner-dashboard px-sm-2">
                                 <div className="col d-flex justify-content-around d-md-none d-block menu-icon">
                                    <NavLink to="/dashboard/meter"><SpeedIcon /></NavLink>
                                    <NavLink to="/dashboard/contact"><PeopleAltOutlinedIcon /></NavLink>
                                    <NavLink to="/dashboard/data"><LayersIcon /></NavLink>
                                    <NavLink to="/dashboard/calender"><CardTravelIcon /></NavLink>
                                 </div>
                                <div className="col-md-1 p-0 d-md-block d-none">
                                    <div className="menu-icon pl-lg-3 pl-0">
                                    <NavLink to="/dashboard/meter" className="pl-2"><SpeedIcon /></NavLink>
                                    <NavLink to="/dashboard/contact" className="pl-2"><PeopleAltOutlinedIcon /></NavLink>
                                    <NavLink to="/dashboard/data" className="pl-2"><LayersIcon /></NavLink>
                                    <NavLink to="/dashboard/calender" className="pl-2"><CardTravelIcon /></NavLink>
                                    </div>
                                </div>
                                <div className="col-md-11 bg-white card-section"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Dashboard;