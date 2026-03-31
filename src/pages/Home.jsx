import { Link } from "react-router-dom";
import Catigorya from "../components/Catigorya";
import man from "../assets/icons/man.svg"
import { GiClothes } from "react-icons/gi";
import { IoIosCloudUpload } from "react-icons/io";
import { GiAmpleDress } from "react-icons/gi";


function Home() {
  const about = [
    {
      id: 1,
      name: "Kiyimni tanlang",
      icons : <GiClothes/>,
      description: "Sevimli kiyimingizni tanlang",
    },
    {
      id: 2,
      name: "Rasm yuklang",
      icons : <IoIosCloudUpload />,
      description: "O’zingizni suratga oling",
    },
    {
      id: 3,
      name: "Natijani ko’ring",
      icons : <GiAmpleDress/>,
      description: "Sevimli kiyimingizni tanlang",
    },
  ];

  return (
    <div>
      <section className="py-0 md:p-7 container flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-auto text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-full md:max-w-150 mb-5 leading-10 sm:leading-12 md:leading-16">
            Kiyimni online kiyib ko'ring{" "}
            <span className="text-indigo-500">Ai yordamida</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#252432] max-w-full md:max-w-105 mb-10 md:mb-17">
            O’z uslubingizni Ai yordamida kuzating va zamonaviy kiyimlarni
            virtual tarzda kiyib koring
          </p>
          <div>
            <Link
              to={"/login"}
              className="bg-indigo-600 p-4.5 px-10 sm:px-14 md:px-17 font-bold text-base text-white rounded-[10px] inline-block"
            >
              Boshlash
            </Link>
          </div>
        </div>

        <div className="w-full md:w-auto flex justify-center">
          <img src={man} alt="home pages logo" className="max-w-full w h-153" />
        </div>
      </section>
      <section className="container p-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-15 text-[#252432] font-bold text-center">
          Qanday ishlaydi
        </h1>
        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between gap-5 md:gap-9">
          {about.map((item) => (
            <div
              key={item.id}
              className="h-27.5 w-full gap-8 flex items-center justify-center bg-white rounded-sm"
            >
               <div>
                   <span className="text-4xl">{item.icons}</span>
               </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg sm:text-xl mb-2 font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container flex items-center justify-center min-h-screen">
        <Catigorya />
      </section>
    </div>
  );
}

export default Home;