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
        <BMIinput pageNum={pageNum} setBmi={setBmi} />
        <hr className='bg-black/10 my-0.5 mt-2'></hr>
        {bmi !== 0 && (
          <div className='flex flex-col w-64'>
            <span>Your BMI is {<span className='font-bold'> {bmi.toFixed(2)} </span>}</span>
            <span>
              You are{' '}
              <span className='font-bold'>
                {bmi < 18.5
                  ? 'Underweight'
                  : bmi < 24.9
                  ? 'Healthy Weight'
                  : bmi < 29.9
                  ? 'Overweight'
                  : 'Obese'}
              </span>
            </span>
            <hr className='bg-black/10 my-0.5'></hr>
            <h3 className='underline italic'>BMI weight ranges</h3>
            <ul className='text-sm'>
              <li>Less than 18.5 = Underweight</li>
              <li>Between 18.5 - 24.9 = Healthy Weight</li>
              <li>Between 25 - 29.9 = Overweight</li>
              <li>Over 30 = Obese</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainPage
