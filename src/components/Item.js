import React from "react";
import "./Item.css";
import logo from "../logo192.png";

export default function Item({ data, isOpen, setIsOpen }){

    function handleOnClick(){
        if(isOpen === data.id){
            setIsOpen(null);
        }
        else{
            setIsOpen(data.id);
        }
    };

    return (
        <div className="item">
            <div className="first">
                <img className="image" src={logo} alt="React" />
            </div>
            <div className="second">
                <div>{data.name}</div>
                <div className={`detail ${data.needToPay === 0 ? "" : data.needToPay < 0 ? "pay" : "recieve"}`}>{
                    data.needToPay === 0 ? `You and ${data.name} are even.` : 
                    data.needToPay > 0 ? `${data.name} owes you ${Math.abs(data.needToPay)}` : `You owe ${data.name} ${Math.abs(data.needToPay)}`
                }</div>
            </div>
            <div className="third">
                <button className="buttonItem" onClick={handleOnClick}>{
                    isOpen === data.id ? "Close" : "Select"
                }</button>
            </div>
        </div>
    )
}