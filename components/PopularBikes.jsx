import { client } from "@/app/lib/sanity";
import Link from "next/link";
import React from "react";
import PopularBikesCarousel from "./PopularBikesCarousel";

const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
        _id,
          name,
          description,
          images,
          price,
          prices_id,
          "slug": slug.current,
          "categories": categories[]-> {
            name
          }
      }`;
  const data = await client.fetch(query);
  return data;
};

const PopularBikes = async () => {
  const bikes = await getData();
  console.log(bikes);
  // console.log(bikes);
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Most Popular Bikes</h2>
        <p className="text-center mb-[30px]">
          The World's Premium Brands In one Destination
        </p>
        <PopularBikesCarousel bikes={bikes} />
        <Link href="/our-bikes">
          <button className="btn btn-accent mx-auto">See all bikes</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularBikes;
