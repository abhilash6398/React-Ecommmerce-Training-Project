import React from 'react';
import profile_img from '../assets/images/profile_img.jpg';

function Profile() {
    return (
        <div className="Container">
            <div className="row" style={{backgroundColor:"lightGray", margin: "20px 400px" }}>
                <div className="form-group col-auto col-md-4">
                <img src={profile_img} class="rounded-circle" alt="Cinque Terre" style={{height:"100px",marginLeft:"30px",marginTop:"15px"}}/>
                </div>
                <br/>
                <div className="form-group col-auto col-md-4" style={{marginTop:"20px"}}>
                <label className="text-muted">Name</label>
                <p>Abhilash Sharma</p>
                </div>
                <div className="form-group col-auto col-md-4" style={{marginTop:"20px"}}>
                <label className="text-muted">Phone Number</label>
                <p>+91-8586016209</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
