import React from "react";
import "../../style/employee-profile.css"

export default function EmpProfile(){
    return(
        <div className="emp-profile">
            <div className="container">
                <h1>Employee Details</h1>
                <div className="info">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="information">
                        <h3>خالد الشربيني احمد حسن</h3>
                        <input type="number" placeholder="Phone Number" />
                        <input type="text" placeholder="Job Title" />
                        <input type="text" placeholder="deparment" />
                        <button>Edit Details</button>
                    </div>
                    <div className="mail"></div>
                    <div className="salary"></div>
                </div>
            </div>
        </div>
    )
}