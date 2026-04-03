import { Link } from "react-router-dom";
import imgs from "../assets/images/img.svg";
import { IoCamera } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { IoCloudUploadSharp } from "react-icons/io5";

function ClothesId() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24">
      <div className="mb-10 md:mb-16 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#252432]">
          Kiyimlar nomi
        </h2>

        <div className="flex flex-wrap items-start sm:items-center gap-3 sm:gap-4">
          <Link
            to={"/chooseclothes"}
            className="flex cursor-pointer rounded-3xl items-center gap-3 bg-white px-2.5 py-2.5 md:px-5 md:py-3"
          >
            <IoCamera className="text-xl md:text-2xl" /> Kamera yoqish
          </Link>

          <Link className="flex cursor-pointer rounded-3xl items-center gap-3 bg-white px-2.5 py-2.5 md:px-5 md:py-3">
            <IoCloudUploadSharp className="text-xl md:text-2xl" /> Rasm yuklash
          </Link>

          <Link className="flex cursor-pointer rounded-3xl items-center gap-3 bg-white px-2.5 py-2.5 md:px-5 md:py-3">
            <TfiReload className="text-xl md:text-2xl" /> Qayta suratga olish
          </Link>
        </div>
      </div>

      <div className="mb-9 flex flex-col lg:flex-row justify-center gap-6 lg:gap-12">
        <div className="rounded-sm w-full lg:w-1/2 min-h-75 sm:min-h-10 md:min-h-100 lg:h-150 flex items-center justify-center bg-[#D9D9D9] overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src={imgs}
            alt="Logo id"
          />
        </div>

        <div className="w-full bg-[#D9D9D9] rounded-sm lg:w-1/2 min-h-75 sm:min-h-100 md:min-h-125 lg:h-150 p-5 sm:p-6 md:p-8">
          <div className="mb-9">
            <h1 className="sm:text-3xl font-bold text-[#252432]">
              Kiyim sozlamalari
            </h1>
          </div>

          <div className="flex flex-col gap-7">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-[#252432] mb-3">
                Ranglari
              </h3>
              <div className="flex flex-wrap gap-3">
                <div className=" bg-[#252432] text-white px-4 py-2.5 text-sm sm:text-base font-medium">
                  Qora
                </div>
                <div className=" bg-white px-4 py-2.5 text-sm sm:text-base text-[#252432] font-medium  border-gray-200">
                  Oq
                </div>
                <div className=" bg-blue-100 px-4 py-2.5 text-sm sm:text-base text-blue-800 font-medium  border-blue-200">
                  Ko‘k
                </div>
                <div className=" bg-green-100 px-4 py-2.5 text-sm sm:text-base text-green-800 font-medium  border-green-200">
                  Yashil
                </div>
                <div className=" bg-red-100 px-4 py-2.5 text-sm sm:text-base text-red-800 font-medium border-red-200">
                  Qizil
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-[#252432] mb-3">
                Razmerlari
              </h3>
              <div className="flex flex-wrap gap-3">
                <div className=" text-center bg-white px-4 py-2.5 text-sm sm:text-base font-semibold text-[#252432]">
                  S
                </div>
                <div className=" text-center bg-[#252432] px-4 py-2.5 text-sm sm:text-base font-semibold text-white">
                  M
                </div>
                <div className=" text-center bg-white px-4 py-2.5 text-sm sm:text-base font-semibold text-[#252432]">
                  L
                </div>
                <div className="text-center bg-white px-4 py-2.5 text-sm sm:text-base font-semibold text-[#252432]">
                  XL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-4 text-[#252432]">
          Kiyim haqida malumot
        </h1>

        <p className="text-[#8987A1] w-full lg:w-1/2 text-base sm:text-lg leading-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
        </p>
      </div>

      <div></div>
    </section>
  );
}

export default ClothesId;
