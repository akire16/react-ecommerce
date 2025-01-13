import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner w-full items-center">
      <img
        className="w-full hover:bg-[#FCC3B4] absolute"
        src="../../../public/pexels-sora-shimazaki-5926462.jpg"
      />
      <h1 className="flex relative w-full h-full bg-[#FCC3B4] bg-opacity-85 justify-center items-center text-white text-8xl font-sans italic">
        Valentine's Day Sales
      </h1>
    </div>
  );
};

export default Banner;
