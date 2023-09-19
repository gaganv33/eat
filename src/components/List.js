import React, { useState } from "react";
import "./List.css";
import Item from "./Item";
import Add from "./Add";

export default function List({ data, setData, isOpen, setIsOpen }){
    const [isAdd, setIsAdd] = useState(false);

    function handleIsAdd(){
        setIsAdd((isAdd) => {
            return !isAdd
        });
    }

    return (
        <div className="list">
            {
                data.map((singleData) => (<Item data={singleData} key={singleData.id} isOpen={isOpen} setIsOpen={setIsOpen} />))
            }
            {
                isAdd ? (<Add setData={setData} setIsAdd={setIsAdd} />) : null
            }
            <button className="button" onClick={handleIsAdd}>
                {
                    isAdd ? "Close" : "Add Friend"
                }
            </button>
        </div>
    )
}