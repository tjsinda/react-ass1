import React, { useState } from "react";
import './App.css'
import Form from "./components/Form";
import BmiScore from "./components/BmiScore";



function App() {
  const [ bmi,  setbmi] =useState("")
  const [bmiType, setbmiType] = useState ("")
 
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center- mt-4 mx-2"></div>
      <Form/>
      </div>
      <div className="row justify-content-center  mt-4">
        <div className="col-12 col-sm-7 nb-3">
      
      <BmiScore bmiNo={bmi} bmiName= {bmiType} />
      </div>
      <div className="col-12 col-sm-6">
      
      </div>
      </div>
      

    </>
  );
}

export default App;