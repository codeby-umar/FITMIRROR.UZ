import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState } from "react";
import imgs from "../assets/images/img.svg";
import { GiBurningEye } from "react-icons/gi";

function Catigorya() {
  const [liked, setLiked] = useState(false);

  const Prodectes = [
    {
      id: 1,
      name: "Super Serum ",
      narxi: "20$",
    },
    {
      id: 2,
      name: "Super Serum ",
      narxi: "50$",
    },
    {
      id: 3,
      name: "Super Serum ",
      narxi: "40$",
    },
    {
      id: 4,
      name: "Super Serum ",
      narxi: "90$",
    },
  ];

  return (
    <section className="container p-5 md:p-0">
      <div className="mb-10 md:mb-16 flex flex-col gap-5  lg:flex-row lg:items-start lg:justify-between">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#252432]">
          Kiyim kategoriyalari
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <label className="flex cursor-pointer items-center gap-3 bg-white px-5 py-3">
            <input
              type="checkbox"
              checked
              className="h-5 w-5 accent-blue-600"
            />
            <span className="text-base sm:text-lg md:text-lg font-semibold text-black">
              Kiyimlar
            </span>
          </label>

          <label className="flex cursor-pointer items-center gap-3 bg-white px-5 py-3">
            <input type="checkbox" className="h-5 w-5 accent-blue-600" />
            <span className="text-base sm:text-lg md:text-lg font-semibold text-black">
              Oyoq kiyimlar
            </span>
          </label>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10">
        <Link
          to={"/clothesid"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10"
        >
          {Prodectes.map((item) => (
            <div key={item.id} className="w-full">
              <div className="relative w-full flex items-center justify-center rounded-t-4xl bg-[#00000040] overflow-hidden">
                <button
                  onClick={() => setLiked(!liked)}
                  className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <Heart
                    className={`transition-all duration-300 ${
                      liked
                        ? "fill-red-500 text-red-500 scale-110"
                        : "text-gray-600"
                    }`}
                  />
                </button>
                <img
                  src={imgs}
                  alt="product"
                  className="object-contain max-w-full h-auto"
                />
              </div>

              <div className="py-3 reletive">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-xl font-semibold font-[K2D]">
                    {item.name}
                  </h3>
                  <span className="text-lg sm:text-3xl font-bold font-[K2D]">
                    {item.narxi}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3 text-sm sm:text-lg text-gray-500">
                  <div className="text-yellow-400">★★★★★</div>
                  <span>(230)</span>
                </div>

                <Link
                  to={"/chooseclothes"}
                  className="px-4 rounded-b-4xl flex items-center justify-center text-white w-full py-2 sm:py-3 gap-2 text-sm sm:text-lg font-bold bg-[#4E47FF]"
                >
                  <GiBurningEye size={"20px"} /> Kiyib ko'rish
                </Link>
              </div>
            </div>
          ))}
        </Link>
      </div>
    </section>
  );
}

export default Catigorya;
