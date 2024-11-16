import Image from "next/image";
import boxIcon from "@/assets/icons/box.png";
import ClockIcon from "@/assets/icons/24-hours.png";
import deliveryIcon from "@/assets/icons/delivery-truck.png";
import shieldIcon from "@/assets/icons/shield.png";
import MovementElement from "@/components/animation/MovementElement";

const TopFeatures = () => {
  return (
    <MovementElement duration={1} y="-80%">
      <div
        className="bg-[#fff] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:px-16 px-8 py-8 items-center justify-between  rounded gap-5 XL:gap-x-10 max-w-7xl mx-auto"
        style={{ boxShadow: "2px 4px 4px 2px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex items-center gap-x-5 ">
          <Image src={boxIcon} alt="discount_icons"></Image>
          <div>
            <h4 className="text-primary-black text-xl font-medium">Discount</h4>
            <p className="text-light-gray">Every week new sales</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5 ">
          <Image src={deliveryIcon} alt="discount_icons"></Image>
          <div>
            <h4 className="text-primary-black text-xl font-medium">
              Free Delivery
            </h4>
            <p className="text-light-gray">100% Free for all orders</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5 ">
          <Image src={ClockIcon} alt="discount_icons"></Image>
          <div>
            <h4 className="text-primary-black text-xl font-medium ">
              Great Support 24/7
            </h4>
            <p className="text-light-gray ">We care your experiences</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5 ">
          <Image src={shieldIcon} alt="discount_icons"></Image>
          <div>
            <h4 className="text-primary-black text-xl font-medium truncate">
              Secure Payment{" "}
            </h4>
            <p className="text-light-gray">100% Secure Payment Method</p>
          </div>
        </div>
      </div>
    </MovementElement>
  );
};

export default TopFeatures;
