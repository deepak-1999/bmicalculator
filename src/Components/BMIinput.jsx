import React from 'react'
import PropTypes from 'prop-types'
import { TbRefresh } from 'react-icons/tb'
import { useState } from 'react'
import { useEffect } from 'react'

const BMIinput = (props) => {
  const { pageNum, setBmi } = props
  const [heightFt, setHeightFt] = useState(0)
  const [heightIn, setHeightIn] = useState(0)
  const [weightSt, setWeightSt] = useState(0)
  const [weightLbs, setWeightLbs] = useState(0)
  const [isMeters, setIsMeters] = useState('m')
  const [heightMetric, setHeightMetric] = useState(0)
  const [weightMetric, setWeightMetric] = useState(0)

  useEffect(() =>{
    console.log('Changed')
    resetValues()
  }, pageNum)


  const resetValues = () => {
    setHeightFt(0)
    setHeightIn(0)
    setWeightSt(0)
    setWeightLbs(0)
    setIsMeters('m')
    setHeightMetric(0)
    setWeightMetric(0)
    setBmi(0)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(pageNum === 1){
      console.log(event)
      let heightSquared = heightMetric*heightMetric * (isMeters ? 1 : (0.01*0.01))
      setBmi(weightMetric/heightSquared)
    }

    return false
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mt-2 flex flex-row'>
        <label>Height</label>
        {pageNum === 0 ? (

          <div className='w-52'>
            <input
              type='number'
              min={1}
              max={10}
              maxLength={1}
              value={heightFt}
              onChange={(e) => setHeightFt(parseInt(e.target.value))}
              className='ml-8 px-2 border bg-white rounded-md border-black'
            ></input>
            <label className='ml-2'>ft</label>
            <input
              type='number'
              min={1}
              max={12}
              maxLength={2}
              value={heightIn}
              onChange={(e) => setHeightIn(parseInt(e.target.value))}
              className='ml-4 px-2 border bg-white rounded-md border-black'
            ></input>
            <label className='ml-2'>in</label>
          </div>
        ) : (
          <div className='w-52'>
            <input
              value={heightMetric}
              max={3}
              onChange={(e) => {
                setHeightMetric(e.target.value)
              }}
              type='number'
              className='w-16 ml-8 px-2 border bg-white rounded-md border-black'
            ></input>
            <select
              value={isMeters}
              onChange={(e) => setIsMeters(e.target.value)}
              className='ml-4 px-1 rounded-md border-black border py-0.75'
            >
              <option value={'m'}>m</option>
              <option value={'cm'}>cm</option>
            </select>
          </div>
        )}
      </div>
      <div className='mt-2 flex flex-row'>
        <label>Weight</label>
        {pageNum === 0 ? (
          <div className='w-52'>
            <input
              type='number'
              value={weightSt}
              min={1}
              onChange={(e) => setWeightSt(parseInt(e.target.value))}
              className='ml-8 px-2 w-11 border bg-white rounded-md border-black'
            ></input>
            <label className='ml-2 mr-0.5'>st</label>
            <input
              type='number'
              min={1}
              value={weightLbs}
              onChange={(e) => setWeightLbs(parseInt(e.target.value))}
              className='ml-4 px-2 w-11 border bg-white rounded-md border-black'
            ></input>
            <label className='ml-2'>lbs</label>
          </div>
        ) : (
          <div className='w-52'>
            <input
              onChange={(e) => {
                setWeightMetric(e.target.value)
              }}
              value={weightMetric}
              type='number'
              className='w-16 ml-8 px-2 border bg-white rounded-md border-black'
            ></input>
            <label className='ml-7'>kg</label>
          </div>
        )}
      </div>
      <hr className='bg-black/10 my-2'></hr>
      <div className='flex flex-row-reverse'>
        <button onClick={resetValues} className='ml-3 mr-2'>
          <TbRefresh />
        </button>
        <input
          className='mx-auto border-2 border-black hover:border-red-500  hover:text-white hover:bg-black px-16 py-1.5 rounded-full'
          type={'submit'}
          value='Calculate'
        ></input>
      </div>
    </form>
  )
}

BMIinput.propTypes = {
  pageNum: PropTypes.number,
  setBmi: PropTypes.func
}

export default BMIinput
