import Container from "@/components/ui/container";
import CustomerExperience from "./CustomerExperience";
import Hero from "./Hero";
import TopFeatures from "./TopFeatures";
import TopRestaurant from "./TopRestaurant";
import PopularProduct from "./PopularProduct";
import AnimatedBg from "@/components/animation/AnimatedBg";

const HomeContainer = () => {
  return (
    <>
      <AnimatedBg>
        <Container className="lg:space-y-20 space-y-8">
          <Hero></Hero>
          <TopFeatures></TopFeatures>
        </Container>
      </AnimatedBg>
      <Container className="lg:space-y-20 space-y-8 mt-10">
        <TopRestaurant></TopRestaurant>
        <hr />
        <PopularProduct></PopularProduct>
        <CustomerExperience></CustomerExperience>
      </Container>
    </>
  );
};

export default HomeContainer;
