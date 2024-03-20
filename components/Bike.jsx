"use client";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChEye, CgShoppingBag, CgEye } from "react-icons/cg";
import AddtoCartBtn from "./AddtoCartBtn";

const Bike = ({ bike }) => {
  const popularBikeCat = bike.categories.find(
    (bike) => bike.name === "popular"
  );

  return (
    <div className="group mb-9">
      <div className="border h-[330px] mb-5 p-4 overflow-hidden relative rounded-xl">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all flex justify-center duration-300 items-center rounded-xl">
          {popularBikeCat && (
            <div className="absolute top-8 left-8 bg-accent px-3 py-[1.5px] text-white rounded-xl uppercase">
              Popular
            </div>
          )}
          <Image
            src={urlFor(bike.images[0]).url()}
            width={240}
            height={147}
            alt=""
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddtoCartBtn
            price_id={bike.price_id}
            id={bike._id}
            name={bike.name}
            currency="USD"
            description={bike.description}
            images={bike.images}
            price={bike.price}
            btnStyles="btn-icon btn-accent"
          />
          <Link href={`/product/${bike.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="text-gray-500 font-semibold mb-2">
        {bike.categories[0].name} bike
      </h5>
      <h4 className="mb-1">{bike.name}</h4>
      <div className="text-accent font-bold text-lg">${bike.price}</div>
    </div>
  );
};

export default Bike;
