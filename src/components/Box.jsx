import React from "react";
import Button from "./Button"; // adjust path as needed

const Box = () => {
  const gridBox = [
    {
      title: "iPhone 16 Pro",
      subtitle: "Built for Apple Intelligence",
      image: "./src/assets/images/grid1.jpg"
    },
    {
      title: "iPhone 16",
      subtitle: "New camera, new design",
      image: "./src/assets/images/grid2.jpg"
    },
    {
      title: "MacBook Air",
      subtitle: "Light. Speed. Power.",
      image: "./src/assets/images/grid3.jpg"
    },
    {
      title: "Apple Watch",
      subtitle: "Time flies, beautifully.",
      image: "./src/assets/images/grid4.jpg"
    },
    {
      title: "AirPods",
      subtitle: "Sound that surrounds.",
      image: "./src/assets/images/grid5.jpg"
    },
    {
      title: "iPad Pro",
      subtitle: "Your next computer is not a computer.",
      image: "./src/assets/images/grid6.jpg"
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mx-4">
      {gridBox.map((box, index) => (
        <div
          key={index}
          className="h-80 bg-cover bg-center flex flex-col items-center justify-center text-white p-6"
          style={{ backgroundImage: `url(${box.image})` }}
        >
          <h1 className="text-3xl font-semibold drop-shadow">{box.title}</h1>
          <p className="text-lg font-normal mt-2 drop-shadow">{box.subtitle}</p>

          <div className="flex gap-4 mt-6">
      {box.buttons.map((btn, i) => (
        <Button key={i} variant={btn.variant}>
          {btn.text}
        </Button>
      ))}
      
    </div>
          <div className="flex gap-4 mt-6">
            <Button variant="primary">Learn more</Button>
            <Button variant="secondary">Buy</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
