import Container from "@/components/ui/container";
import CustomerExperience from "./CustomerExperience";
import Hero from "./Hero";
import TopFeatures from "./TopFeatures";
import TopRestaurant from "./TopRestaurant";

const HomeContainer = () => {
  return (
    <Container className="lg:space-y-20 space-y-8">
      <Hero></Hero>
      <TopFeatures></TopFeatures>
      <TopRestaurant></TopRestaurant>
      <CustomerExperience></CustomerExperience>
    </Container>
  );
};

export default HomeContainer;
