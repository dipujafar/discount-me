"use client";
import Image from "next/image";

import logo from "@/assets/image/logo.png";
import { Input } from "../ui/input";

import {
  ChevronDown,
  Heart,
  Search,
  ShoppingCart,
  TableOfContents,
  User,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Container from "../ui/container";
import Link from "next/link";

const categoriesData = ["Dessert", "Noodles", "Rice"];

const Navbar = () => {
  return (
    <>
      <Container>
        <nav className="flex items-center justify-between gap-x-5 py-3 2xl:gap-x-36">
          {/* logo image */}
          <div>
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo"
                width={1200}
                height={1200}
                className="h-12 w-auto md:h-16 lg:h-auto"
              />
            </Link>
          </div>

          {/* nav link and search bar */}
          <div className="flex flex-1 items-center justify-center gap-10">
            {/* search */}
            <div className="relative hidden w-2/3 items-center lg:flex xl:w-1/2">
              <Input
                type="text"
                placeholder={"Search...."}
                className="w-full min-w-[250px] rounded-full pl-10"
              />
              <Search
                className="absolute left-4 border-none font-light"
                size={20}
              />
              <Button
                type="submit"
                className="absolute right-0 rounded-l-none rounded-r-full bg-primary-color"
              >
                Search
              </Button>
            </div>

            {/* navLinks */}
            <nav>
              <ul className="hidden items-center gap-8 text-light-black xl:flex">
                <li>
                  <Menubar className="w-fit border-none bg-transparent shadow-none">
                    <MenubarMenu>
                      <MenubarTrigger className="truncate text-light-black duration-500 hover:bg-primary-color hover:text-white">
                        All Category
                        <ChevronDown className="ml-3" size={20} />
                      </MenubarTrigger>
                      <MenubarContent>
                        <Link href={`/menus`}>
                          <MenubarItem className="max-w-[180px]">
                            All Categories
                          </MenubarItem>
                        </Link>
                        <hr />
                        {categoriesData?.map((category, idx: number) => (
                          <div key={idx}>
                            <Link href={`/menus`}>
                              <MenubarItem className="max-w-[180px]">
                                {category}
                              </MenubarItem>
                            </Link>
                            <hr />
                          </div>
                        ))}
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </li>

                <li className="duration-100 hover:text-primary-color">
                  <Link href="/coupon" className="truncate">
                    Coupon
                  </Link>
                </li>
                <li className="duration-100 hover:text-primary-color">
                  <Link href="/support" className="truncate">
                    Support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* nav icons */}
          <div className="hidden items-center gap-3 xl:flex">
            <Link href={"/shopping-cart"} className="relative">
              <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-primary-color p-1 text-white">
                {5}
              </span>

              <ShoppingCart />
            </Link>
            <Link href={"/user/profile"}>
              <User></User>
            </Link>
          </div>

          {/* small device view */}
          <div className="xl:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <TableOfContents size={24} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="mx-auto">
                    <div>
                      <Link href={"/"}>
                        <Image
                          src={logo}
                          alt="logo"
                          width={1200}
                          height={1200}
                          className="h-16 w-auto"
                        />
                      </Link>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-5 grid gap-4 py-4">
                  {/* search bar */}

                  <div className="relative items-center lg:hidden">
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="w-full rounded-full lg:pl-10"
                    />

                    <Button
                      type="submit"
                      className="absolute right-0 top-0 rounded-l-none rounded-r-full bg-primary-color"
                    >
                      Search{" "}
                    </Button>
                  </div>

                  {/* Navlinks */}
                  <nav>
                    <ul className="mx-auto mt-5 flex flex-col items-center gap-y-4 text-light-black">
                      <li>
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            asChild
                            className="rounded px-2 hover:bg-primary-color hover:text-white"
                          >
                            <div className="flex cursor-pointer items-center">
                              All Categories
                              <ChevronDown className="ml-2" size={20} />{" "}
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="mx-auto w-56">
                            <DropdownMenuGroup>
                              <Link href={`/menus`}>
                                <DropdownMenuItem>
                                  All Categories
                                </DropdownMenuItem>
                              </Link>

                              <hr />
                              {categoriesData?.map((category, idx: number) => (
                                <div key={idx}>
                                  <Link href={`/menus}`}>
                                    <DropdownMenuItem className="max-w-[180px]">
                                      {category}
                                    </DropdownMenuItem>
                                  </Link>
                                  <hr />
                                </div>
                              ))}
                            </DropdownMenuGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </li>
                      <li className="duration-100 hover:text-primary-color">
                        <Link href="/coupon"> Coupon</Link>
                      </li>
                      <li className="duration-100 hover:text-primary-color">
                        <Link href="/support">support</Link>
                      </li>
                    </ul>
                  </nav>

                  {/* nav icons */}
                  <div className="mt-5 flex items-center justify-center gap-3">
                    <Link href={"/shopping-cart"} className="relative">
                      <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-primary-color p-1 text-white">
                        5
                      </span>

                      <ShoppingCart />
                    </Link>
                    <Link href={"/user/profile"}>
                      <User></User>
                    </Link>
                  </div>
                </div>
                {/* <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter> */}
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
      <hr />
    </>
  );
};

export default Navbar;