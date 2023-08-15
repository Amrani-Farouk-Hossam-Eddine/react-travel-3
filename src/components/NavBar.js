import { FaBars } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center px-4 h-16 text-white">
      <h1 className="text-xl sm:text-2xl font-bold relative z-20">
        Experieces
      </h1>
      <div onClick={handleNav} className="relative z-20">
        <FaBars size={20} />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "w-full h-full absolute z-10 top-0 left-0 bg-black/90 ease-in-out duration-500 grid place-content-center"
            : "absolute left-[-100%] top-0 ease-in-out duration-500 w-full h-full"
        }
      >
        <ul className="text-center text-white text-xl font-bold">
          <li className="py-8">
            <a href="/">Home</a>
          </li>
          <li className="py-8">
            <a href="#destinitions">Destinitions</a>
          </li>
          <li className="py-8">
            <a href="#reservation">Reservation</a>
          </li>
          <li className="py-8">
            <a href="#amenities">Amenities</a>
          </li>
          <li className="py-8">
            <a href="#rooms">Rooms</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
