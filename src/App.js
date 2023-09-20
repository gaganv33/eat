import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App(){
  const [data, setData] = useState([
    {
      id: 1,
      name : "Clark",
      needToPay : 10,
    },
    {
      id: 2,
      name : "Sarah",
      needToPay : -10,
    },
    {
      id:3,
      name : "Anthony",
      needToPay: 0,
    },
  ]);
  const [isOpen, setIsOpen] = useState(null);

  const singleData = data.filter((value) => {
    return value.id === isOpen;
  })[0];

  return (
    <div className="app">
      <List data={data} setData={setData} isOpen={isOpen} setIsOpen={setIsOpen} />
      {
        singleData !== undefined ? (<Form singleData={singleData} setFunction={setData} users={data} setIsOpen={setIsOpen} />) : null
      }
    </div>
  )
}
