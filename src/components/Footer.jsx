import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-[#1C1E29] text-gray-400 pt-12 pb-6">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold  text-white mb-2">
              FITMIRROR UZ
            </h2>
            <p className="text-sm text-gray-500 max-w-63">
               O’z uslubingizni Ai
              yordamida kuzating va zamonaviy kiyimlarni 
            </p>
          </div>

          <ul className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10 text-base sm:text-lg">
            <Link className="hover:text-white transition" to={"/about"}>
              About
            </Link>
            <Link className="hover:text-white transition" to={"/clothes"}>
              Shop
            </Link>
            <Link className="hover:text-white transition" to={"/contact"}>
              Contact
            </Link>
            <Link className="hover:text-white transition" to={"/serveses"}>
              Privacy
            </Link>
          </ul>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <a
              className="flex items-center gap-2 hover:text-white transition"
              href="tel:+998770142800"
            >
              <IoCall size={"20px"} />
              +998 77 014 28 00
            </a>
            <a
              className="flex items-center gap-2 hover:text-white transition"
              href="mailto:onlyahror@gmail.com"
            >
              <SiMinutemailer size={"20px"} />
              onlyahror@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 my-6"></div>

        <p className="text-center text-sm sm:text-base text-gray-500">
          © 2026 All rights reserved —{" "}
          <span className="text-white font-medium">codebyumar</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
