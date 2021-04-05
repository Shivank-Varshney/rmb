import React, { useState, useEffect } from "react";
import Regisillustration from "../image/rmb-regis.png";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";

const Registration = () => {
    const [refferid, setrefferid] = useState(null)
    let {userid} = useParams();
    useEffect(() => {
        setrefferid(userid)
        console.log(userid);
    },[])

    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    

    const [data, setData] = useState(
        {
            name : "",
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
        console.log("done");
        axios.post(
      "http://backend.rmbpaisa.co.in/addMember",
      {
        name: data.name,
        email: data.email,
        password: data.password,
        number: data.number,
      },
      config
    );
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
                                            <label className="sr-only" htmlFor="InputName">Name</label>
                                            <input type="name" className="form-control" name="name" value={data.name} onChange={InputEvent} id="InputName" placeholder="Enter your name" />
                                        </div>
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
                                        {
                                            refferid ? (
                                                <>
                                                <div className="form-group my-2">
                                                    <input type="text" value={refferid} className="form-control"name="refferid" id="refferid" placeholder="Reffer id." />
                                                </div>
                                                <div className="form-group my-2">
                                                    <input type="text" className="form-control" name="reffername" id="reffername" placeholder="reffer name." />
                                                </div>
                                                </>
                                            ):""
                                        }
                                        <button type="submit" className="btn-login">Continue <ChevronRightIcon /></button>
                                    </form>
                                    <div className="text-center">
                                        <NavLink to="/login" className="links">Login Now</NavLink><br />
                                        <p></p>
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