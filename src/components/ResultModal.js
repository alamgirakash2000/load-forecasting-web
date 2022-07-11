import React from "react";

export default function ResultModal({ result, setShowModal }) {
  return (
    <div className='resultModal'>
      <div className='result'>
        <h1>Forecasted Result</h1>
        <p>
          The forecasted result for that hour is:
          <b className='text-success'>
            {" "}
            {parseFloat(result).toFixed(3)} MW
          </b>{" "}
        </p>
        <button
          className='btn btn-danger mt-5'
          onClick={(e) => setShowModal(false)}>
          {" "}
          CLOSE{" "}
        </button>
      </div>
    </div>
  );
}
