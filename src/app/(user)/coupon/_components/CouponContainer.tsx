"use client";
import Container from "@/components/ui/container";
import CouponCard from "./CouponCard";
import { motion } from "framer-motion";
import {
  childrenVariants,
  parentVariants,
} from "@/components/animation/FramerMotionVariant";
const couponData = {
  _id: 1,
  price: "100.00",
  title: "Single Discount",
  description: "with 5% off each payment",
};

const CouponContainer = () => {
  return (
    <Container className="lg:mt-16 mt-8 md:space-y-10 space-y-5">
      <motion.div
        initial={{ y: "-10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        exit={{ y: "-10%", opacity: 0 }}
      >
        <motion.div
          variants={parentVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          exit="exit"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div variants={childrenVariants}>
              <CouponCard data={couponData}></CouponCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default CouponContainer;
