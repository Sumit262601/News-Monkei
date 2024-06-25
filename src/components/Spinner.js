import React from 'react';
import Loading from './spinner.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={Loading} alt="loader" />
    </div>
  );
}

export default Spinner;
