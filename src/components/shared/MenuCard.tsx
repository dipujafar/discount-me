import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { TMenu } from "@/types";

const MenuCard = ({ data }: { data: TMenu }) => {
  return (
    <Card className="max-w-[320px] md:max-w-[400px]  lg:max-w-[450px] hover:shadow-2xl rounded-xl duration-100 ease-in">
      <CardContent className="px-0">
        <Image
          src={data?.image}
          alt="menu_image"
          width={1200}
          height={1200}
          className="w-full h-[200px] object-cover rounded-xl"
        ></Image>
        <div className="px-4 mt-4 flex-between">
          <div>
            <h1 className="text-xl font-semibold">{data?.name}</h1>
            <p className="text-primary-black/80">
              {data?.description.slice(0, 25)}
              {data?.description.length > 25 ? "..." : ""}
            </p>
          </div>
          <p className="font-semibold text-xl">${data?.price}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
