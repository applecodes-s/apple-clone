import React from 'react'
import Button from './Button'
import '../App.css'


const Header = () => {
  return (
  
      <header>
        <div className='hero-section flex flex-col items-center mx-auto text-white text-center mb-4'>
          <div className="absolute p-6 sm:p-10 md:p-12 max-w-xl">
          <h1 className='text-3xl sm:text-4xl md:text-6xl font-semibold'> iPhone 16 Pro</h1>
          <p className='text-lg sm:text-2xl md:text-3xl font-normal mt-2'>Built for Apple Intelligence</p>
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
          <Button variant="primary"> Learn more </Button>
          <Button variant="secondary">Buy</Button>
          </div>
          </div>
       
        </div>
        

      
      </header>
    
  )
}

export default Header
