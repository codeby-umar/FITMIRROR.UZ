// import icons from "../assets/icons/icons.svg";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const NavlinkActivate = ({ isActive }) =>
    `text-base pb-1 border-b-2 transition-all duration-200 ${
      isActive
        ? "border-indigo-600 font-bold text-gray-900"
        : "border-transparent text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <header className="container w-full">
      <div className=" flex items-center justify-between">
        <a
          className="flex items-center text-gray-800 text-2xl font-bold gap-2"
          href="/"
        >
          FITMIRROR UZ {/*  <img src={icons} alt="logo icon" /> */}
        </a>
        <div className="items-center justify-center rounded-2xl bg-white p-5 px-10 hidden md:block">
          <ul className="flex items-center  gap-11.75">
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
        <div>
          <Link
            className="bg-indigo-600 p-4 font-bold text-base text-white rounded-[10px] px-5"
            to={"/chooseclothes"}
          >
            Virtual kiyib korish
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
