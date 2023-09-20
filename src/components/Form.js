import React, { useState } from "react";
import "./Form.css";

export default function Form({ singleData, setFunction, users, setIsOpen }){

    const [data, setData] = useState({
        billValue : 0,
        yourExpense : 0,
        whoPaid : "you",
    });

    function handleOnClick(){
        if(data.yourExpense > data.billValue){
            alert("Your expense cannot be greater than the value");
            return;
        }
        let newArray = users.filter((value) => {
            return value.id !== singleData.id;
        })
        let answer = users.filter((value) => {
            return (value.id === singleData.id);
        })
        answer = answer[0];
        if(data.whoPaid === "you"){
            answer.needToPay = answer.needToPay + (data.billValue - data.yourExpense);
        }
        else{
            answer.needToPay = answer.needToPay - data.yourExpense;
        }
        setFunction(() => {
            return [...newArray, answer];
        })
        setIsOpen(null);
    }


    return (
        <div className="form">
            <p className="header">{`SPLIT A BILL WITH ${singleData.name}`}</p>
            <div className="container">
                <label>Bill value</label>
                <input className="formInput" type="text" placeholder="Bill value" value={data.billValue} onChange={(e) => {
                    setData((values) => {
                        return {...values, billValue : Number(e.target.value)};
                    })
                }} />
                <label>Your expense</label>
                <input className="formInput" type="text" placeholder="Your expense" value={data.yourExpense} onChange={(e) => {
                    setData((values) => {
                        return {...values, yourExpense: Number(e.target.value)};
                    })
                }} />
                <label>{singleData.name} expense</label>
                <input id="friendInput" className="formInput" type="text" placeholder={`${singleData.name} expense`} disabled value={data.billValue - data.yourExpense} />
                <label>Who is paying the bill?</label>
                <select className="formInput" value={data.whoPaid} onChange={(e) => {
                    setData((values) => {
                        return {...values, whoPaid: e.target.value};
                    })
                }}>
                    <option value={"you"}>You</option>
                    <option value={"friend"}>{singleData.name}</option>
                </select>
            </div>
            <div style={{textAlign:"center"}}>
                <button className="buttonInput" onClick={handleOnClick}>Split</button>
            </div>
        </div>
    )
}
