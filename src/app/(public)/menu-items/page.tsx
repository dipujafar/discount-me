import React from "react";
import MenuItemsContainers from "./_components/MenuItemsContainers";
import Container from "@/components/ui/container";
import Image from "next/image";

const MenuItemsPage = () => {
  return (
    <Container className="page-padding">
      <MenuItemsContainers></MenuItemsContainers>
    </Container>
  );
};

export default MenuItemsPage;
