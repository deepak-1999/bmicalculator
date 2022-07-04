import React, { useState } from 'react'

const BmiCalculator = () => {
  const [gender, setGender] = useState('male')
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi,setBmi] = useState(false)
  return (
    <div className='flex flex-row'>
      <div className='mx-auto w-96 bg-stone-400/40 h-full flex flex-col'>
        <div className='px-3 pt-1.5 flex flex-row'>
          <label className='mr-32 ml-3'>Gender</label>
          <div className='flex flex-row '>
            <div className='mr-6 flex flex-row'>
              <input
                type={'radio'}
                name={'male'}
                checked={gender === 'male'}
                onChange={() => setGender('male')}
                onClick={() => setGender('male')}
                className='checked:bg-blue-500 mr-1 mt-1 pt-2'
              ></input>
              <span className=''>Male</span>
            </div>
            <div>
              <input
                type={'radio'}
                name={'female'}
                onChange={() => setGender('female')}
                onClick={() => setGender('female')}
                checked={gender === 'female'}
                className='checked:bg-blue-500 mr-1 mt-1'
              ></input>
              <span>Female</span>
            </div>
          </div>
        </div>
        <div className='px-3 pt-1.5 flex flex-row space-x-32'>
          <label className='ml-3 my-auto'>Weight </label>
          <input
            className='mt-1 px-1.5 py-0.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder='in kg'
            type='number'
            onChange={(e) => {
              setWeight(parseInt(e.target.value))
            }}
          ></input>
        </div>
        <div className='px-3 pt-1.5 flex flex-row space-x-32'>
          <label className='ml-3 mr-1 my-auto'>Height</label>
          <input
            className='mt-1 px-1.5 py-0.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            placeholder='in cm'
            type='number'
            onChange={(e) => {
              setHeight(parseInt(e.target.value))
            }}
          ></input>
        </div>
        <button
          className='disabled:bg-black/40 hover:bg-black h-10 mx-auto my-2.5 w-8/12 px-6 font-semibold rounded-md bg-black/75 text-white'
          type='submit'
          disabled={weight <= 0 || height <= 0}
          onClick={() => {
            setBmi((weight / Math.pow(height / 100, 2)).toFixed(2))
          }}
        >
          Calculate
        </button>
        {bmi && (
          <div className='px-3 pt-1.5 flex flex-col'>
            <label className='text-3xl my-auto text-center'>BMI</label>
            <span className='text-3xl my-auto text-center mx-0'>{bmi}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default BmiCalculator
