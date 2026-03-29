import { Link } from "react-router-dom";
import imgs from "../assets/images/img.svg";
import { IoCamera } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { IoCloudUploadSharp } from "react-icons/io5";



function ClothesId() {
  return (
    <section className="container px-7 md:px-0 py-25 md:py-15">
      <div className="mb-10 md:mb-16 flex flex-col gap-5  lg:flex-row lg:items-start lg:justify-between">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#252432]">
          Kiyimlar nomi
        </h2>

        <div className="flex flex-wrap sm:flex-row items-start sm:items-center gap-4">
          <Link className="flex cursor-pointer rounded-3xl items-center gap-3 bg-white px-5 py-3">
            <IoCamera size={'25px'} /> Kamera yoqish
          </Link>
          <Link className="flex cursor-pointer rounded-3xl items-center gap-3 bg-white px-5 py-3">
            <IoCloudUploadSharp size={'25px'} />  Rasm yuklash
          </Link>
          <Link className="flex cursor-pointer rounded-3xl items-center gap-3 bg-white px-5 py-3">
            <TfiReload size={'25px'} />  Qayta suratga olish
          </Link>
        </div>
      </div>
      <div className="h-150 mb-9 flex justify-center gap-12 ">
        <div className=" rounded-sm w-1/2 h-full flex items-center justify-center  bg-[#D9D9D9]">
          <img className="h-full" src={imgs} alt="Logo id" />
        </div>
        <div className="h-full bg-[#D9D9D9] w-1/2">
          <h1>Kiyim sozlamalari</h1>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold py-4 text-[#252432]">Kiyim haqida malumot</h1>
        <p className="text-[#8987A1] w-1/2 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
        </p>
      </div>
      <div>

      </div>
    </section>
  );
}

export default ClothesId;
