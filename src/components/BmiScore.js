import React from 'react'

function BmiScore({bmiNo,bmiName}) {
    
  return (
<div className="test-center shadow rounded p-4">
<div><h3>Your BMI Score</h3></div>
  <div class="row justify-content-md-right">
    <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">25</div>

  <div className="fs-3 fw-bold text-primary">Overweight</div>
</div>
</div>
  )
}

export default BmiScore
