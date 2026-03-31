import { useRef, useState, useEffect } from "react";
import { IoCameraReverse, IoCamera, IoClose, IoCheckmark } from "react-icons/io5";
import { SiStartrek } from "react-icons/si";
import { FaBezierCurve } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Choose() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [stream, setStream] = useState(null);
  const [facingMode, setFacingMode] = useState("user");
  const [isCameraStarted, setIsCameraStarted] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const startCamera = async () => {
    try {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setStream(null);
  };

  useEffect(() => {
    if (isCameraStarted) {
      startCamera();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [facingMode, isCameraStarted]);

  const handleStart = async () => {
    setCapturedImage(null);
    setIsSaved(false);
    setIsCameraStarted(true);
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const image = canvas.toDataURL("image/png");
    setCapturedImage(image);
    setIsSaved(true);

    console.log("Captured image:", image);

    stopCamera();
    setIsCameraStarted(false);
  };

  const switchCamera = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    setIsSaved(false);
    setIsCameraStarted(true);
  };

  return (
    <div className="relative w-full  overflow-hidden">
      {!isCameraStarted && !capturedImage && (
        <div className="flex flex-col items-center justify-center p-10 text-center">
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl  border-white/10 flex items-center justify-center mb-6">
            <FaBezierCurve size={90} />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Virtual kiyim tanlang !
          </h1>

          <p className="max-w-lg text-sm md:text-base leading-6 mb-8">
            O‘zingizni rasmga oling va AI sizga mos kiyimlarni tanlab ko‘rsatadi.
            Boshlash tugmasini bosing va kamerani ishga tushiring.
          </p>

          <button
            onClick={handleStart}
            className="px-15 py-4 flex items-center gap-4 rounded-2xl bg-white text-black font-semibold text-base md:text-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
             Boshlash <SiStartrek size={'25px'}/>
          </button>
        </div>
      )}

      {isCameraStarted && !capturedImage && (
        <div className="relative w-full h-screen">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          <div className="absolute top-0 left-0 w-full flex items-center justify-between p-4 md:p-6">
            <button
              onClick={() => {
                stopCamera();
                setIsCameraStarted(false);
              }}
              className="w-12 h-12 rounded-full bg-black/35 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-lg"
            >
              <IoClose size={24} />
            </button>

            <div className="px-4 py-2 rounded-full bg-black/35 backdrop-blur-md border border-white/10 text-sm font-medium">
              Kamera tayyor
            </div>

            <button
              onClick={switchCamera}
              className="w-12 h-12 rounded-full bg-black/35 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-lg"
            >
              <IoCameraReverse size={22} />
            </button>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
            <div className="w-full max-w-sm h-[70vh] border-2 border-white/40 rounded-4xl shadow-[0_0_0_9999px_rgba(0,0,0,0.25)]" />
          </div>

          <div className="absolute bottom-0 left-0 w-full pb-8 md:pb-10">
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-white/80 bg-black/30 px-4 py-2 rounded-full backdrop-blur-md">
                Kadrga to‘liq tushing
              </p>

              <button
                onClick={capturePhoto}
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-2xl active:scale-95 transition-all duration-200"
              >
                <span className="absolute inset-2 rounded-full border-4 border-gray-300" />
                <IoCamera size={30} className="text-black relative z-10" />
              </button>
            </div>
          </div>
        </div>
      )}

      {capturedImage && (
        <div className=" flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-md">
            <div className="relative rounded-4xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <img
                src={capturedImage}
                alt="Captured preview"
                className="w-full h-[70vh] object-cover"
              />

              {isSaved && (
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-sm flex items-center gap-2 ">
                  <IoCheckmark size={20} />
                  <span className="text-sm font-medium">Saqlandi</span>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={retakePhoto}
                className="flex-1 py-4 rounded-sm bg-white  text-black font-semibold"
              >
                Qayta olish
              </button>

              <Link to={'/clothesid'}
                className="flex-1 py-4 rounded-sm bg-white text-black font-semibold transition"
              >
                AI ga yuborish
              </Link>
            </div>
          </div>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}