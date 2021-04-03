import React from "react";
import Navbar from "./Navbar";
import { NavLink } from 'react-router-dom';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';

const Dashboard = () => {
    return(
        <React.Fragment>
            <Navbar />
            <section className="container-fluid" id="dashboard">
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="col-1">
                                <NavLink to="/"><PeopleAltOutlinedIcon /></NavLink>
                                <NavLink to="/"><PeopleAltOutlinedIcon /></NavLink>
                                <NavLink to="/"><PeopleAltOutlinedIcon /></NavLink>
                                <NavLink to="/"><PeopleAltOutlinedIcon /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Dashboard;