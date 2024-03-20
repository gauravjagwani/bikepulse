"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import CartItem from "./CartItem";
import CheckoutBtn from "./CheckoutBtn";

const CardSideBar = () => {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice,
  } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-12">
            My Shopping Cart({cartCount})
          </SheetTitle>
        </SheetHeader>
        <>
          {cartCount === 0 ? (
            <div className="flex flex-col justify-center items-center w-full h-[630px]">
              <h5 className="text-black/80">Your Cart is Empty</h5>
            </div>
          ) : (
            <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]) => {
                  return <CartItem item={item} key={key} />;
                })}
            </ScrollArea>
          )}
        </>
        {cartCount > 0 && (
          <div>
            <div className="flex justify-between mb-8">
              <div className="font-semibold text-lg ">Total:</div>
              <div className="font-semibold text-lg">${totalPrice}</div>
            </div>
          </div>
        )}
        <CheckoutBtn />
      </SheetContent>
    </Sheet>
  );
};

export default CardSideBar;
