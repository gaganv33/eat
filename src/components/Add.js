import React, { useState } from "react";
import "./Add.css";

export default function Add({ setData, setIsAdd }){
    const [formData, setFormData] = useState({
        id : Date.now(),
        name : "",
        needToPay : 0,
    });

    function handleOnChange(e){
        setFormData((values) => {
            return {...values, name : e.target.value};
        });
    }

    function handleOnClick(){
        if(formData.name !== ""){
            setData((values) => {
                return [...values, formData];
            });
            setIsAdd((value) => {
                return !value;
            });
        }
    };

    return (
        <div className="add">
            <div>
                <label>Friend Name</label>
                <input className="inputAdd" type="text" placeholder="Friend Name" valeu={formData.name} onChange={(e) => handleOnChange(e)} />
            </div>
            <button className="addButton" onClick={handleOnClick}>Add Friend</button>
        </div>
    )
}