import heroImage from "@/assets/image/hero/hero_image.png";
import Image from "next/image";
import line from "@/assets/image/hero/waterMark.png";
import MovementElement from "@/components/animation/MovementElement";
const Hero = () => {
  return (
    <div className="flex-center flex-col-reverse md:flex-row lg:gap-10 gap-5 relative">
      <div className="flex-1 md:space-y-6 space-y-3">
        <h1 className="xl:text-6xl md:text-4xl text-2xl font-bold">
          Good <span className="text-primary-color">food</span>, great <br />{" "}
          memories
        </h1>
        <p className="max-w-md text-xl text-primary-black ml-0">
          Enable diners to customize their booking by requesting a specific
          table location or view.
        </p>
      </div>
      <div className="flex-1 overflow-hidden">
        <MovementElement duration={1} x={"20%"}>
          <Image src={heroImage} alt="hero_image"></Image>
        </MovementElement>
      </div>
      <div className="absolute xl:-top-10 2xl:top-0 lg:-top-10 md:-top-6 top-10 left-1/4">
        <Image src={line} alt="a_line"></Image>
      </div>
    </div>
  );
};

export default Hero;
