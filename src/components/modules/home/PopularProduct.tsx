import { trendingProducts } from "@/utils/product-data";
import Image from "next/image";
import Link from "next/link";

const PopularProduct = () => {
  return (
    <div className="">
      <h1 className="md:text-4xl text-2xl text-primary-black font-bold">
        Products
      </h1>
      <div>
        <div className="mt-7 grid grid-cols-2 gap-x-2 gap-y-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {trendingProducts?.map((product) => (
            <Link href={`/menu-items/${product?._id}`} key={product?._id}>
              <div className="group relative space-y-1 hover:bg-gray-200 hover:shadow-md rounded-xl duration-200 ease-in">
                <Image
                  src={product?.image}
                  alt="product_image"
                  width={1950}
                  height={1000}
                  className="md:h-[256px] h-[200px] sm:h-[180px] w-full rounded-xl "
                ></Image>

                <div className="px-2">
                  <h1 className="font-medium text-primary-black  ">
                    {product?.name}
                  </h1>
                  <p className="font-medium   text-light-gray ">
                    ${product?.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
