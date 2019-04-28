import React from "react";

const UserInput = (props) => {
    const style = {
        border: '2px solid black'
    }

        return (
            <input 
            onChange={props.change} 
            type="text" 
            value={props.currentName}
            style={style}></input>
            );

}

export default UserInput;