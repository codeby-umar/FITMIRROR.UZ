import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";

function Footer() {
  return (
    <footer className="h-62 bg-[#1C1E29]">
      <div className="container">
        <div className="flex items-center p-5  justify-between ">
          <ul className="text-gray-500 flex items-center gap-10 text-xl">
            <Link to={"/about"}>About</Link>
            <Link to={"/clothes"}>Shop</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/serveses"}>Privacy Policy</Link>
          </ul>
          <div className="flex items-center h-30 gap-8">
            <div className="border-[0.5px] h-full text-gray-500"></div>
            <div className="text-gray-500 text-xl flex flex-col gap-4">
              <a className="flex items-center gap-2" href="tel:+998770142800">
                <IoCall size={"25px"} />
                +998770142800
              </a>
              <a
                className="flex items-center gap-2"
                href="mailto:onlyahror@gmail.com"
              >
                <SiMinutemailer size={"25px"} /> onlyahror@gmail.com
              </a>
            </div>
          </div>
        </div>
        <p className="text-xl font-semibold text-center text-gray-500">
          2026 All rights reserved by codebyumar
        </p>
      </div>
    </footer>
  );
}

export default Footer;
