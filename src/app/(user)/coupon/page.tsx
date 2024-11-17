import React from "react";
import CouponContainer from "./_components/CouponContainer";
import Container from "@/components/ui/container";

export const metadata = {
  title: "Coupon",
  description: "Earn exclusive offers and discounts on your favorite products.",
};

const CouponPage = () => {
  return (
    <Container className="page-padding ">
      <h1 className="text-primary-black lg:text-4xl text-2xl font-bold">
        Coupon Cards
      </h1>
      <CouponContainer></CouponContainer>
    </Container>
  );
};

export default CouponPage;
