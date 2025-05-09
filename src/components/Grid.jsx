import React from 'react'
import '../App'
import Button from './Button'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Grid = () => {
    const gridBox = [
        {
            title:"MacBook Air",
            subtitle:"Sky blue colour. Sky high performance with M4.",
            image: "/assets/images/grid1.jpg",
            buttons: [
                { text: "Learn more ", variant: "primary" },
                { text: "Buy", variant: "secondary" },
              ],
        },
        {
            icon: <i className="fab fa-apple"></i>,
            title:"WATCH",
            subtitle:"Show your stipes with the new edition Sport Band",
            image: "/assets/images/grid2.jpg",
            buttons: [
                { text: "Buy", variant: "primary" }
              ],
        },
        {
            title:"iPad Air",
            subtitle:"Now supercharged by the M3 chip",
            image: "/assets/images/grid3.jpg",
            buttons: [
                { text: "Learn more", variant: "primary" },
                { text: "Buy", variant: "secondary" },
              ],
        },
        {
            title:"Mac Book Pro",
            subtitle:"A work of Smart",
            image: "/assets/images/grid4.jpg",
            textColor: "text-white",
            buttons: [
                { text: "Learn more", variant: "primary" },
                { text: "Buy", variant: "secondary" },
              ],
        },
        {
            title:"Air Pods 4",
            subtitle:"Iconi. Now supersonic. Available with Active Noise cancellation",
            image: "/assets/images/grid5.jpg",
            textColor: "text-white",
            textPosition: "justify-end", 
            buttons: [
                { text: "Learn more", variant: "primary" },
                { text: "Buy", variant: "secondary" },
              ],
        },
        {
            icon: <i className="fab fa-apple"></i>,
            title:"Trade In",
            subtitle:"Upgrade and save it's that easy",
            image: "/assets/images/grid6.jpg",
            buttons: [
                { text: "Get your estimate", variant: "primary" },
              ],
        },
    ]

  return (
        <header className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4'>
            {gridBox.map((box, index) => (
            <div 
            key={index} 
            className={`grid-section flex flex-col items-center text-center p-6 sm:p-10 md:p-16 lg:p-20 ${box.textColor} ${box.textPosition}`}
            style={{ backgroundImage: `url(${box.image})`}}
            > 

            <h1 className='text-3xl sm:text-3xl md:text-5xl font-semibold'>{box.icon} {box.title}</h1>
            <p className='text-sm sm:text-sm md:text-lg  font-normal mt-2 w-3/4'>{box.subtitle} </p>
            <div className="flex  gap-4 mt-4  justify-center">
                {box.buttons.map((btn, i) => (
                    <Button key={i} variant={btn.variant}>
                        {btn.text}
                    </Button>
                ) )}

          </div>
            </div>
          ) )}  
      </header>
  )
}

export default Grid
 