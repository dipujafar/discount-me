import RestaurantCard from "@/components/shared/RestaurantCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { restaurantData } from "@/utils/restaurant-data";

import { div } from "framer-motion/client";
import { ChevronRight } from "lucide-react";

const TopRestaurant = () => {
  return (
    <div>
      <div className="flex-between">
        <div className="space-y-2">
          <h1 className="md:text-4xl text-xl font-semibold truncate">
            Explore{" "}
            <span className="text-primary-color"> Top Restaurants </span>
          </h1>
          <p className="text-light-gray">
            Check your city Near by <br /> Restaurant
          </p>
        </div>
        <div>
          <p className="text-primary-black hover:text-light-gray flex-center group cursor-pointer overflow-hidden text-xl truncate">
            see all
            <ChevronRight
              size={24}
              color="#9A9CAA"
              className="group-hover:translate-x-10 overflow-hidden duration-700"
            />
          </p>
        </div>
      </div>
      {/* top restaurants carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-8"
      >
        <CarouselContent>
          {restaurantData?.map((restaurant, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
            >
              <div className="p-1">
                <RestaurantCard data={restaurant}></RestaurantCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TopRestaurant;
