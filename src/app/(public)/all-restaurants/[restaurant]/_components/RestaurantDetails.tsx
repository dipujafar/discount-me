"use client";
import Image from "next/image";
import locationIcon from "/public/ExploreRestaurants/location.svg";
import { AlignJustify, Warehouse } from "lucide-react";
import { restaurant } from "@/utils/single-rstaurant";
import RestaurantImageSlider from "./RestaurantImageSlider";

const RestaurantDetails = () => {
  return (
    <>
      <div className="space-y-7">
        <RestaurantImageSlider images={restaurant.images} />

        <h1 className="text-3xl">
          <span className="text-[#8ABA51]">{restaurant?.name}</span>
        </h1>
        <hr></hr>
        {/* event details */}
        <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row">
          <div className="flex-1 space-y-5">
            {/* location */}
            <div className="flex items-center gap-x-2">
              <Image src={locationIcon} alt="location marker icon" />
              <span className="max-w-md text-base font-medium text-primary-black/75">
                {restaurant?.location}
              </span>
            </div>

            {/* Restaurant Name */}
            <div className="flex items-center gap-x-2">
              <Warehouse color="#334A55" />
              <span className="max-w-md text-base font-medium text-primary-black/75">
                {restaurant?.name}
              </span>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex gap-x-2">
              <AlignJustify size={28} />
              <p className="max-w-xl">{restaurant.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
