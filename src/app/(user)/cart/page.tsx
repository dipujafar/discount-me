import { Metadata } from "next";
import CartContainer from "./_components/CartContainer";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Cart",
  description: "Add items to your cart and checkout to complete your order.",
};

const CartPage = () => {
  return (
    <Container className="page-padding ">
      <CartContainer></CartContainer>
    </Container>
  );
};

export default CartPage;
