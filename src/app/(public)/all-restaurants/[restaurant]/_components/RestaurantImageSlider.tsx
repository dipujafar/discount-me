import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

export default function RestaurantImageSlider({
  images,
}: {
  images: string[];
}) {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {images ? (
            images?.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  height={400}
                  width={800}
                  src={image}
                  alt="picture of the restaurant"
                  className="mx-auto block h-full max-h-[400px] w-full"
                />
              </CarouselItem>
            ))
          ) : (
            <CarouselItem>
              <div className="h-[400px] w-[800px] animate-pulse bg-gray-400/30"></div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="bg-primary-green text-primary-white" />
        <CarouselNext className="bg-primary-green text-primary-white" />
      </Carousel>
    </div>
  );
}
