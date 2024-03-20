"use client";
import Link from "next/link";
import Nav from "./Nav";
import CardSideBar from "./CardSideBar";
import { CgShoppingBag } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <header className="bg-white shadow-lg sticky top-0 py-8 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-[24px]">
            <span className="text-accent">Bike</span>Pulse
          </h1>
        </Link>
        <div className="flex gap-2">
          <Nav />
          <div
            onClick={() => handleCartClick()}
            className="relative cursor-pointer"
          >
            <CgShoppingBag className="text-[26px]" />
            <div className="bg-accent w-[18px] h-[18px] text-center absolute rounded-full text-sm text-white -right-1 -bottom-1">
              {cartCount}
            </div>
          </div>
          <CardSideBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
