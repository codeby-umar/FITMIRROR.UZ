import { Link ,useLocation } from "react-router-dom";
import { IoCall, IoHome } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { MdCameraAlt } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";

function Footer() {
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path;
  return (
    <>
      <footer className="bg-[#1C1E29] text-gray-400 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">
                FITMIRROR UZ
              </h2>
              <p className="text-sm text-gray-500 max-w-65">
                O’z uslubingizni AI yordamida kuzating va zamonaviy kiyimlarni
                oson toping.
              </p>
            </div>

            <ul className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10 text-base sm:text-lg">
              <Link className="hover:text-white transition" to="/about">
                About
              </Link>
              <Link className="hover:text-white transition" to="/clothes">
                Shop
              </Link>
              <Link className="hover:text-white transition" to="/contact">
                Contact
              </Link>
              <Link className="hover:text-white transition" to="/privacy">
                Privacy
              </Link>
            </ul>

            <div className="flex flex-col gap-4 items-center md:items-start">
              <a
                className="flex items-center gap-2 hover:text-white transition"
                href="tel:+998507121208"
              >
                <IoCall size={20} />
                +998 50 712 12 08
              </a>
              <a
                className="flex items-center gap-2 hover:text-white transition"
                href="mailto:codingbyumar@gmail.com"
              >
                <SiMinutemailer size={20} />
                codingbyumar@gmail.com
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 my-6"></div>

          <p className="text-center text-sm sm:text-base text-gray-500">
            © 2026 All rights reserved —{" "}
            <span>codeby-umar</span>
          </p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 z-50 w-full md:hidden px-4 pb-4">
        <div className="relative bg-[#1C1E29]/90 backdrop-blur-lg border border-white/10 rounded-[2.5rem] px-8 py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className={`flex flex-col items-center transition-all duration-300 ${
                isActive("/")
                  ? "text-white scale-110"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <IoHome size={22} />
              <span className="text-[10px] mt-1 font-medium">Home</span>
              {isActive("/") && (
                <div className="w-1 h-1 bg-white rounded-full mt-0.5" />
              )}
            </Link>
            <Link
              to="/clothes"
              className={`flex flex-col items-center transition-all duration-300 ${
                isActive("/clothes")
                  ? "text-white scale-110"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <HiMiniShoppingBag size={22} />
              <span className="text-[10px] mt-1 font-medium">Shop</span>
              {isActive("/clothes") && (
                <div className="w-1 h-1 bg-white rounded-full mt-0.5" />
              )}
            </Link>

            <div className="relative -mt-12">
              <Link
                to="/chooseclothes"
                className="bg-gray-200 text-[#1C1E29] w-14 h-14 rounded-2xl flex items-center justify-center  border-4 border-[#1C1E29] active:scale-90 transition-transform duration-200 rotate-45"
              >
                <div className="-rotate-45">
                  <MdCameraAlt size={28} />
                </div>
              </Link>
            </div>
            <Link
              to="/about"
              className={`flex flex-col items-center transition-all duration-300 ${
                isActive("/about")
                  ? "text-white scale-110"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <FaUser size={20} />
              <span className="text-[10px] mt-1 font-medium">About</span>
              {isActive("/about") && (
                <div className="w-1 h-1 bg-white rounded-full mt-0.5" />
              )}
            </Link>

            <Link
              to="/contact"
              className={`flex flex-col items-center transition-all duration-300 ${
                isActive("/contact")
                  ? "text-white scale-110"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <IoCall size={20} />
              <span className="text-[10px] mt-1 font-medium">Contact</span>
              {isActive("/servises") && (
                <div className="w-1 h-1 bg-white rounded-full mt-0.5" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
