const Hero = () => {
  return (
    <div className="mt-[-64px] h-[100vh] w-full">
      <img
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      <div className="max-w-[1110px] w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto text-white text-center sm:text-left">
        <p>All Inclusive</p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
          Private Beaches & Getaways
        </h1>
        <p className="max-w-[600px] w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
          est, id consequuntur sequi ipsum vitae sit non exercitationem.
        </p>
        <button className="px-4 py-1 my-2 bg-white rounded-full text-black">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
