import React from "react";

export default function Loading() {
  return (
    <div className='loading'>
      <div className='loading__overlay'>
        <div className='loading__box'>
          <img
            src='https://raw.githubusercontent.com/alamgirakash2000/11-hotel-reservation/master/src/images/gif/loading-arrow.gif'
            alt=''
          />
          <h1>Please wait for the Result</h1>
        </div>
      </div>
    </div>
  );
}
