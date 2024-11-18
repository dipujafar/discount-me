import Container from "@/components/ui/container";
import CouponCard from "./CouponCard";
const couponData = {
  _id: 1,
  price: "100.00",
  title: "Single Discount",
  description: "with 5% off each payment",
};

const CouponContainer = () => {
  return (
    <Container className="lg:mt-16 mt-8 md:space-y-10 space-y-5">
      {Array.from({ length: 3 }).map((_, i) => (
        <CouponCard data={couponData}></CouponCard>
      ))}
    </Container>
  );
};

export default CouponContainer;
