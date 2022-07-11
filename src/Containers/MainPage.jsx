import React, { useState } from 'react'
import BMIinput from '../Components/BMIinput'

const MainPage = () => {
  const [pageNum, setPageNum] = useState(0)
  const [bmi, setBmi] = useState(0)
  return (
    <div className='font-mono flex justify-center items-center mt-12 mx-12'>
      <div className='flex flex-col'>
        <h1 className='text-center text-xl font-bold'>BMI Calculator</h1>
        <hr className='bg-black/10'></hr>
        <div className='flex flex-row space-x-20 my-2'>
          <button
            type='button'
            onClick={() => setPageNum(0)}
            className={`px-3 py-1 border-black/70 border rounded-full ${
              pageNum === 0 && `bg-black text-white shadow-xl`
            } hover:bg-black/70 hover:text-white`}
          >
            Imperial
          </button>
          <button
            type='button'
            onClick={() => setPageNum(1)}
            className={`px-3 py-1 border-black/70 border rounded-full ${
              pageNum === 1 && `bg-black text-white shadow-xl`
            } hover:bg-black/70 hover:text-white hover:border-black/10`}
          >
            Metric
          </button>
        </div>
        <hr className='bg-black/10 my-0.5'></hr>
        <BMIinput pageNum={pageNum} setBmi = {setBmi} />
        {bmi!==0 && <label>{bmi}</label>}
      </div>
    </div>
  )
}

export default MainPage
