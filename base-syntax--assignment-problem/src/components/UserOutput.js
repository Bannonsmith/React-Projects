import React from "react";
import '../App.css';


const UserOutput = (props) => {
        return (
            <div className="UserOutput">
                <p>username: {props.name}</p>
                <p>lorem ipsoum</p>
                <p>lorem ipsoum</p>
            </div>
        );
    
}

export default UserOutput;