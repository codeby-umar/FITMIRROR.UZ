import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-[#1C1E29] py-8 md:h-62">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-5">
          
          <ul className="text-gray-500 flex flex-col sm:flex-row items-center gap-5 sm:gap-10 text-base sm:text-lg md:text-xl text-center">
            <Link to={"/about"}>About</Link>
            <Link to={"/clothes"}>Shop</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/serveses"}>Privacy Policy</Link>
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-6 md:h-30">
            
            <div className="hidden sm:block border-[0.5px] sm:h-20 md:h-full text-gray-500"></div>

            <div className="text-gray-500 text-base sm:text-lg md:text-xl flex flex-col gap-4 items-center sm:items-start">
              <a className="flex items-center gap-2" href="tel:+998770142800">
                <IoCall size={"22px"} />
                +998770142800
              </a>
              <a
                className="flex items-center gap-2"
                href="mailto:onlyahror@gmail.com"
              >
                <SiMinutemailer size={"22px"} />
                onlyahror@gmail.com
              </a>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl font-semibold text-center text-gray-500 mt-4">
          2026 All rights reserved by codebyumar
        </p>
      </div>
    </footer>
  );
}

export default Footer;