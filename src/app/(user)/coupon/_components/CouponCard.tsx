import cardImage from "@/assets/image/coupon/cardImage.png";
import Image from "next/image";
import borderImage from "@/assets/image/coupon/border.png";

type TProps = {
  price: string;
  title: string;
  description: string;
};

const CouponCard = ({ data }: { data: TProps }) => {
  return (
    <div className="relative">
      <Image
        src={cardImage}
        alt="cardImage"
        className="hidden md:block"
      ></Image>
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-5 gap-x-2 md:absolute md:inset-0  md:bg-transparent   rounded lg:max-w-xl md:max-w-md mx-auto xl:max-w-2xl bg-gray-300 py-4">
        <div className="flex md:flex-col gap-x-2">
          <h2 className="text-primary-green text-xl xl:text-5xl md:text-3xl  font-medium">
            Price
          </h2>
          <p className="text-primary-color text-xl xl:text-5xl md:text-3xl md:font-bold">
            ${data?.price}
          </p>
        </div>
        <Image
          src={borderImage}
          alt="border_image"
          className="hidden md:block"
        ></Image>
        <div className="md:space-y-2">
          <h2 className="text-primary-black text-lg xl:text-5xl md:text-3xl font-bold text-center md:text-start ">
            {data?.title}
          </h2>
          <p className="text-primary-black/70 text-center lg:text-2xl md:text-start">
            ${data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
