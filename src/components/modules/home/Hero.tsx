import heroImage from "@/assets/image/hero/hero_image.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex-center">
      <div className="flex-1 md:space-y-6 space-y-3">
        <h1 className="lg:text-6xl md:text-3xl text-2xl font-bold">
          Good <span className="text-primary-color">food</span>, great <br />{" "}
          memories
        </h1>
        <p className="max-w-md text-xl text-primary-black ml-0">
          Enable diners to customize their booking by requesting a specific
          table location or view.
        </p>
      </div>
      <div className="flex-1">
        <Image src={heroImage} alt="hero_image"></Image>
      </div>
    </div>
  );
};

export default Hero;
