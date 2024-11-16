import Image from "next/image";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/image/logo.png";
import googlePlay from "@/assets/image/google_play_store.png";
import appStore from "@/assets/image/app_store.png";

import Link from "next/link";
import Container from "../ui/container";

const Footer = () => {
  return (
    <div className="bg-primary-black py-16">
      <Container>
        <div className="flex flex-col flex-wrap xl:justify-between justify-center gap-y-20g gap-x-2 md:flex-row">
          {/* Logo and description */}
          <div className="">
            <Image
              src={logo}
              alt="logo"
              width={1200}
              height={1200}
              className="w-auto h-auto"
            />
            <p className="mt-4 max-w-[320px] text-primary-white/70">
              Ecommerce is a free UI Kit from Paperpillar that you can use for
              your personal or commercial project.
            </p>
          </div>

          {/* Links and supports informations */}
          <div className="flex xl:justify-between justify-center items-center flex-wrap gap-6 lg:gap-28">
            {/* Account Links */}
            <div>
              <h3 className="mb-4 font-semibold text-primary-white">Account</h3>
              <ul className="space-y-2 text-primary-white">
                <li>
                  <Link href="/user/profile">My Account</Link>
                </li>
                <li>
                  <Link href="/sign-in">Login / Register</Link>
                </li>
                <li>
                  <Link href="/shopping-cart">Cart</Link>
                </li>
                <li>
                  <Link href="/favorite-products">Wishlist</Link>
                </li>
                <li>
                  <Link href="/products">Shop</Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-semibold text-primary-white">
                Quick Links
              </h3>
              <ul className="space-y-2 text-primary-white">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-condition">Terms Of Use</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Support Information */}
            <div>
              <h3 className="mb-4 font-semibold text-primary-white">Support</h3>
              <ul className="space-y-2 text-primary-white">
                <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
              </ul>
            </div>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="mb-4 font-semibold text-primary-white">
              Download App
            </h3>
            <div className="flex items-center space-x-4">
              {/* <Image
                src={qrCode}
                alt="QR Code"
                width={60}
                height={60}
                className="h-[60px] w-[60px]"
              /> */}
              <div className="space-y-2">
                <Image
                  src={googlePlay}
                  alt="Download from Google Play"
                  width={135}
                  height={30}
                  className="h-8"
                />
                <Image
                  src={appStore}
                  alt="Download from App Store"
                  width={135}
                  height={600}
                  className="h-8"
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-primary-gray">
                <Facebook size={20} color="#fff" />
              </a>
              <a href="#" className="text-primary-gray">
                <Twitter size={20} color="#fff" />
              </a>
              <a href="#" className="text-primary-gray">
                <Linkedin size={20} color="#fff" />
              </a>
              <a href="#" className="text-primary-gray">
                <Instagram size={20} color="#fff" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
