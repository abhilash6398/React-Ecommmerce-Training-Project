import React from 'react';
import profile_img from '../assets/images/profile_img.jpg';

function Profile() {
    return (
        <div className="Container">
            <div className="row">
                <div className="form-group col-auto col-md-4">
                <img src={profile_img} class="rounded-circle" alt="Cinque Terre" style={{height:"100px",marginLeft:"350px",marginTop:"30px"}}/>
                </div>
                <div className="form-group col-auto col-md-4">
                <label>Name</label>
                </div>
            </div>
        </div>
    )
}

export default Profile
