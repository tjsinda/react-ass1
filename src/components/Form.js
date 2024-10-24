import{useState} from "react";

function Form() {
  const[weight,setweight] =useState("");
  const[height,setheight] =useState("");
  const onSubmit =(e) =>{
    e.preventDefault();
    console.log(weight);
    console.log(weight);
  };
  return (
<div>

  <div className="col-sm-4 shadow rounded px-5">
    <h1 className="test-center pt-3 text-secondary h2">BMI Calculator</h1>
  </div>
  <form>
  <div className="row">
    <div className="col col-sm-6">
<div className="my-3">
    <label className="form-label">Weight(kg):</label>
    <input type="text" className="form-control"></input>
  </div>
  </div>
  </div>
  <div className="col col-sm-6">
<div className="my-3">
    <label className="form-label">Height(m):</label>
    <input type="text" className="form-control"></input>
  </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  )                                                                 
}
export default Form

