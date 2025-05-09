import React from 'react'
import '../App'
import Button from './Button'

const Watch = () => {
  return (
    <div>
          <header>
        <div className='watch-section flex flex-col items-center mx-auto text-center mb-4'>
          <div className="absolute p-6 sm:p-10 md:p-12 max-w-xl">
            <div className="flex justify-center items-center text-center mx-auto gap-2">
            <h1 className="text-6xl"><i className="fab fa-apple"></i></h1>
            <h1 className='text-3xl sm:text-4xl md:text-6xl font-semibold'>WATCH</h1>
            </div>
          <p className='text-lg sm:text-2xl md:text-3xl font-normal mt-2'>Live heathier. Train Better. Stay Connected</p>
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
          <Button variant="primary"> Learn more </Button>
          <Button variant="secondary">Buy Watch</Button>
          </div>
          </div>
       
        </div>
      </header>
    </div>
  )
}

export default Watch
