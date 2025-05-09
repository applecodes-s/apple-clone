import React from 'react'
import '../App.css'
import Button from './Button'

const Herosections = () => {
    const heroSection = [
        {
            title : "Mother's Day",
            subtitle : "It's not too late to find the perfect gift for Mom.",
            image: "./src/assets/images/hero2.png"
        },
        {
            title : "Mother's Day",
            subtitle : "It's not too late to find the perfect gift for Mom.",
            image: "./src/assets/images/hero4.jpg"
        }
    ]
  return (
    <div>
        <div className=''>
            {heroSection.map((section, index) => (
                <div 
                key={index}
                className='herosection flex flex-col justify-end items-center mx-auto text-center mb-4'
                style={{ backgroundImage: `url(${section.image})` }}
                > 
                <div className='p-16'>
                <h1 className='text-6xl font-semibold'>{section.title}</h1>
                <p className='text-3xl font-normal my-4'>{section.subtitle}</p>
                <Button variant='primary'>Shop</Button>
                </div>
                </div>
            ) )}

          <div className="absolute p-8">

          <div className="flex  gap-4 mt-6  justify-center">

          </div>
          </div>
       
        </div>
    </div>
  )
}

export default Herosections
