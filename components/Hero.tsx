import Image from "next/image";
import Button from "./Button";
import CampIconImg from "@/public/camp.svg";
import StarImg from "@/public/star.svg";
import PlayIconImg from "@/public/play.svg";
import CloseIcon from "@/public/close.svg";

const Hero = () => {
  return (
    <section
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 
      md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src={CampIconImg}
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Kuari Pass Trek</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src={StarImg}
                  alt="star"
                  key={index}
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon={PlayIconImg}
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div
          className="relative z-20 flex w-[268px] flex-col gap-8
        rounded-3xl bg-green-90 px-7 py-8"
        >
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src={CloseIcon} alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Uttrakhand</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">31 KMs</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">12,516 Ft.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
