import React from 'react'
import '../App'
import Button from './Button'

const Mothers = () => {
  return (
    <header>
        <div className='mother-section flex flex-col justify-end items-center mx-auto text-center mb-4'>
          <div className="absolute p-6 sm:p-10 md:p-12 max-w-xl">
          <h1 className='text-3xl sm:text-4xl md:text-6xl font-semibold'> Mother's Day</h1>
          <p className='text-lg sm:text-2xl md:text-3xl font-normal mt-2'>It's not too late to find the perfect gift for Mom.</p>
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
          <Button variant='primary'>Shop</Button>
          </div>
          </div>
       
        </div>
        
      
      </header>
    
  )
}

export default Mothers
