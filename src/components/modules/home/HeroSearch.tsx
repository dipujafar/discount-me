"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  ArrowUpAz,
  ChevronDown,
  MapPin,
  MoveUpRight,
  Search,
} from "lucide-react";
import { useState } from "react";

const HeroSearch = () => {
  const [isLocationSetOpen, setIsLocationSetOpen] = useState(false);
  return (
    <div className="flex xl:w-3/4 border-2 p-1 rounded-full border-primary-black/80 lg:pr-3 relative">
      <Button
        onClick={() => setIsLocationSetOpen(!isLocationSetOpen)}
        onBlur={() => setIsLocationSetOpen(!isLocationSetOpen)}
        className="rounded-l-full rounded-r-xl bg-primary-green py-6 lg:text-lg hover:bg-primary-black/70"
      >
        <MapPin size={22} className="hidden md:block"></MapPin>Location{" "}
        <ChevronDown></ChevronDown>
      </Button>
      <Input className="py-6 focus-visible:ring-0 border-none focus-visible:ring-offset-0 bg-transparent shadow-none"></Input>
      <Button className="rounded-l-xl rounded-r-full bg-primary-green py-6 text-lg hover:bg-primary-black/70 rounded-full">
        <Search></Search>
      </Button>

      <Button
        className={cn(
          "bg-primary-green py-6  hover:bg-primary-black/70 absolute top-14 left-5 opacity-0 invisible duration-1000 ease-in",
          isLocationSetOpen && "opacity-100 visible"
        )}
      >
        Set Nearby Location <MoveUpRight size={28} className="ml-0" />
      </Button>
    </div>
  );
};

export default HeroSearch;
