import React from 'react'
import PropTypes from 'prop-types'
import { TbRefresh } from 'react-icons/tb'
import { useEffect } from 'react'
import { useFormik } from 'formik'

const BMIinput = (props) => {
  const { pageNum, setBmi } = props
  
  useEffect(() =>{
    formik.handleReset()
    setBmi(0)
  }, [pageNum])

  const formik = useFormik({
    initialValues: {
      heightFt: 0,
      heightIn: 0,
      weightSt: 0,
      weightLbs: 0,
      isMeters: 'm',
      heightMetric: 0,
      weightMetric: 0
    },
    onSubmit: values => {
      const {heightFt, heightIn, weightLbs, weightMetric, weightSt, isMeters, heightMetric} = values
      if(pageNum === 0){
        let weightToMetric = (weightSt * 14 + weightLbs) * 0.453592
        let heightToMetric = (heightFt * 12 + heightIn) * 0.0254
        let heightSquared = heightToMetric * heightToMetric
        setBmi(weightToMetric/heightSquared)
      }
      if(pageNum === 1){
        let heightSquared = heightMetric* heightMetric * (isMeters === 'm' ? 1 : (0.01 * 0.01))
        setBmi(weightMetric/heightSquared)
      }
    },
    onReset: () => { setBmi(0) }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='mt-2 flex flex-row'>
        <label>Height</label>
        {pageNum === 0 ? (
          <div className='w-52'>
            <input
              id='heightFt'
              name='heightFt'
              type='number'
              min = {formik.values.heightIn ? 0 : 1}
              max={9}
              onChange={formik.handleChange}
              value={formik.values.heightFt}
              className='ml-8 px-2 w-11 border bg-white rounded-md border-black'
            ></input>
            <label className='ml-2 mr-0.5'>ft</label>
            <input
              type='number'
              id='heightIn'
              name='heightIn'
              max={12}
              maxLength={2}
              value={formik.values.heightIn}
              onChange={formik.handleChange}
              className='ml-4 px-2 w-11 border bg-white rounded-md border-black'
            ></input>
            <label className='ml-2'>in</label>
          </div>
        ) : (
          <div className='w-52'>
            <input
              value={formik.values.heightMetric}
              min={formik.values.isMeters === 'cm' && 1}
              max={formik.values.isMeters === 'm' ? 3 : 300}
              type='number'
              id='heightMetric'
              name='heightMetric'
              onChange={formik.handleChange}
              className='w-16 ml-8 px-2 border bg-white rounded-md border-black'
            ></input>
            <select
              id='isMeters'
              name='isMeters'
              onChange={formik.handleChange}
              value={formik.values.isMeters}
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
              id='weightSt'
              name='weightSt'
              min={formik.values.weightLbs ? 0 : 1}
              value={formik.values.weightSt}
              onChange={formik.handleChange}
              className='ml-8 px-2 w-11 border bg-white rounded-md border-black'
            ></input>
            <label className='ml-2 mr-0.5'>st</label>
            <input
              type='number'
              max={14}
              id='weightLbs'
              name='weightLbs'
              onChange={formik.handleChange}
              value={formik.values.weightLbs}
              className='ml-4 px-2 w-11 border bg-white rounded-md border-black'
            ></input>
            <label className='ml-2'>lbs</label>
          </div>
        ) : (
          <div className='w-52'>
            <input
              min={1}
              id='weightMetric'
              name='weightMetric'
              onChange={formik.handleChange}
              value={formik.values.weightMetric}
              type='number'
              className='w-16 ml-8 px-2 border bg-white rounded-md border-black'
            ></input>
            <label className='ml-7'>kg</label>
          </div>
        )}
      </div>
      <hr className='bg-black/10 my-2'></hr>
      <div className='flex flex-row-reverse'>
        <button onClick={formik.handleReset} className='ml-3 mr-2'>
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
