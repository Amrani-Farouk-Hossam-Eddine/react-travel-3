import React from "react";

const Travel = () => {
  return (
    <div
      id="reservation"
      className="max-w-[1140px] w-full mx-auto grid lg:grid-cols-2 gap-4"
    >
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"
          alt="/"
          className="row-span-3 object-cover w-full h-full p-1"
        />
        <img
          src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="/"
          className="row-span-2 object-cover w-full h-full p-1"
        />
        <img
          src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
          alt="/"
          className="row-span-2 object-cover w-full h-full p-1"
        />
        <img
          src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="/"
          className="row-span-3 object-cover w-full h-full p-1"
        />
        <img
          src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80"
          alt="/"
          className="row-span-2 object-cover w-full h-full p-1"
        />
      </div>
      <div className="flex flex-col justify-center text-center lg:text-left py-4 lg:py-0">
        <h1 className="text-4xl font-bold">Plan Your Next Trip</h1>
        <h4 className="py-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div className="py-4">
          <button className="px-4 py-1 my-2 border border-black rounded-full text-black mr-2">
            Learn More
          </button>
          <button className="px-4 py-1 my-2 bg-black rounded-full text-white">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Travel;
