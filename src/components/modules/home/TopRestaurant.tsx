"use client";
import RestaurantCard from "@/components/shared/RestaurantCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { restaurantData } from "@/utils/restaurant-data";

import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const TopRestaurant = () => {
  return (
    <div>
      <div className="flex-between flex-col md:flex-row">
        <div className="space-y-2">
          <h1 className="section-title">
            Explore{" "}
            <span className="text-primary-color"> Top Restaurants </span>
          </h1>
          <p className="text-light-gray">
            Check your city Near by <br /> Restaurant
          </p>
        </div>
        <div>
          <Link href="/all-restaurants">
            <p className="text-primary-black hover:text-light-gray flex-center group cursor-pointer overflow-hidden text-xl truncate">
              see all
              <ChevronRight
                size={24}
                color="#9A9CAA"
                className="group-hover:translate-x-10 overflow-hidden duration-700"
              />
            </p>
          </Link>
        </div>
      </div>
      {/* top restaurants carousel */}
      <Carousel
        opts={{
          loop: true,
          duration: 55,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 3500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full mt-8"
      >
        <CarouselContent>
          {restaurantData?.slice(0, 8)?.map((restaurant) => (
            <CarouselItem
              key={restaurant._id}
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
