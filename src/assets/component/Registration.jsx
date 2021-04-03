import React, { useState } from "react";
import Regisillustration from "../image/rmb-regis.png";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {NavLink} from "react-router-dom";

const Registration = () => {

    const [data, setData] = useState(
        {
            email : "",
            password : "",
            number: ""
        }
    );

    const InputEvent = (event) => {
        const {name,value} = event.target;

        setData((preVal) =>{
            return{
                   ...preVal,
                   [name] : value
            };
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${data.email}. Password: ${data.password}. Number: ${data.number}`)

    }
    return(
        <>
            <div className="container-fluid py-3" id="registration-page">
                <div className="row">
                    <div className="col">
                        <div className="container-fluid inner-regis">
                            <div className="row">
                                <div className="col-md-5 p-0">
                                    <img src={Regisillustration} className="img-fluid" alt="illustration"/>
                                </div>
                                <div className="col-md-7 p-lg-5 p-md-4 p-3 bg-white">
                                    <h1>User Registration</h1><br />
                                    <p>Welcome back</p>
                                    <form onSubmit={formSubmit}>
                                        <div className="form-group my-2">
                                            <label className="sr-only" htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                                        </div>
                                        <div className="form-group my-2">
                                            <label className="sr-only" htmlFor="InputPassword">Password</label>
                                            <input type="password" className="form-control" name="password" value={data.password} onChange={InputEvent} id="InputPassword" placeholder="Password" />
                                        </div>
                                        <div className="form-group my-2">
                                            <label className="sr-only" htmlFor="InputNumber">Mobile Number</label>
                                            <input type="text" className="form-control" name="number" value={data.number} onChange={InputEvent} id="InputNumber" placeholder="Mobile No." />
                                        </div>
                                        <button type="submit" className="btn-login">Continue <ChevronRightIcon /></button>
                                    </form>
                                    <div className="text-center">
                                        <NavLink to="/login" className="links">Login Now</NavLink><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;