// import icons from "../assets/icons/icons.svg";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const NavlinkActivate = ({ isActive }) =>
    `text-base pb-1 border-b-2 transition-all duration-200 ${
      isActive
        ? "border-indigo-600 font-bold text-gray-900"
        : "border-transparent text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <header className="container w-full py-4">
      <div className="flex items-center justify-between">
        
        <a
          className="flex items-center text-gray-800 text-xl sm:text-2xl font-bold gap-2"
          href="/"
        >
          FITMIRROR UZ
        </a>
        <div className="items-center justify-center rounded-2xl bg-white p-5 px-10 hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-11.75">
            <NavLink className={NavlinkActivate} to="/">
              Bosh Sahifa
            </NavLink>
            <NavLink className={NavlinkActivate} to={"/clothes"}>
              Kiyimlar
            </NavLink>
            <NavLink className={NavlinkActivate} to={"/about"}>
              Qanday ishlaydi
            </NavLink>
            <NavLink className={NavlinkActivate} to={"/servises"}>
              Xizmatlar
            </NavLink>
          </ul>
        </div>

        <div className="hidden sm:block">
          <Link
            className="bg-indigo-600 p-3 sm:p-4 font-bold text-sm sm:text-base text-white rounded-[10px] px-4 sm:px-5"
            to={"/chooseclothes"}
          >
            Virtual kiyib korish
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-5 bg-white p-5 rounded-2xl">
          <NavLink className={NavlinkActivate} to="/">
            Bosh Sahifa
          </NavLink>
          <NavLink className={NavlinkActivate} to={"/clothes"}>
            Kiyimlar
          </NavLink>
          <NavLink className={NavlinkActivate} to={"/about"}>
            Qanday ishlaydi
          </NavLink>
          <NavLink className={NavlinkActivate} to={"/servises"}>
            Xizmatlar
          </NavLink>

          <Link
            className="bg-indigo-600 p-3 font-bold text-base text-white rounded-[10px] text-center"
            to={"/chooseclothes"}
          >
            Virtual kiyib korish
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;