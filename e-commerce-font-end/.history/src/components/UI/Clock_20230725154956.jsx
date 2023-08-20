import React from 'react'

function Clock() {
  return <div className="clock__wrapper d-flex align-items-center gap-5">
    <div className="clock__data d-flex align-items-center gap-5">
        <div className="text-center">
            <h1 className="text-white fs-3">10 </h1>
            <h5 className="text-white fs-">Days </h5>
        </div>
    </div>
  </div>
}

export default Clock