import icon1 from "@/assets/icons/Icon1.png";
import icon2 from "@/assets/icons/Icon2.png";
import icon3 from "@/assets/icons/Icon3.png";
import icon4 from "@/assets/icons/Icon4.png";
import PulseShadow from "@/components/animation/PulseShadow";

import Image from "next/image";

const CustomerExperience = () => {
  return (
    <div className="space-y-5 md:space-y-5 lg:space-y-8">
      <h1 className="text-2xl font-bold lg:text-4xl">
        Customer experience is <br /> important to us
      </h1>
      <p className="max-w-lg text-primary-color">
        Sed dictum ipsum elementum diam dapibus, ut sodales orci monte
        consectetur. Fusce a mollis lorem. Orci varius natoque penatibus.
      </p>
      <div className="flex flex-grow justify-between">
        <div className="space-y-3">
          <PulseShadow color="#6bbe8c">
            <Image src={icon1} alt="icon"></Image>
          </PulseShadow>
          <p className="font-medium text-primary-black">Original Products</p>
        </div>

        <div className="space-y-3">
          <PulseShadow color="#6bbe8c">
            <Image src={icon2} alt="icon"></Image>
          </PulseShadow>
          <p className="font-medium text-primary-black">
            Satisfaction Guarantee
          </p>
        </div>
        <div className="space-y-3">
          <PulseShadow color="#6bbe8c">
            <Image src={icon3} alt="icon"></Image>
          </PulseShadow>
          <p className="font-medium text-primary-black">New Arrival Everyday</p>
        </div>
        <div className="space-y-3">
          <PulseShadow color="#6bbe8c">
            <Image src={icon4} alt="icon"></Image>
          </PulseShadow>
          <p className="font-medium text-primary-black"> Fast Shipping</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerExperience;
