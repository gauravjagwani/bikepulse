"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-full xl:max-1-[580px] md:h-[820px] flex flex-col justify-center items-center xl:items-start">
            <h1>
              Where{" "}
              <span className="text-accent">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Adventurous",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Relaxing",
                    1000,
                    "Thrilling",
                    1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
              <br></br>
              Cycling begins
            </h1>
            <p className="text-gray-800 text-lg max-w-[500px] mx-auto text-center xl:text-left xl:mx-0 mt-3 mb-5">
              Welcome to BikePulse, your one-stop shop for all things cycling!
              Whether you're a seasoned rider or just starting out, BikePulse is
              here to fuel your passion.
            </p>
            <div className="flex item-center gap-4 mx-auto xl:mx-0">
              <Link href="/our-bikes" className="mx-auto md:mx-0">
                <button className="btn btn-primary">Shop Now</button>
              </Link>
              <Link href="/our-bikes" className="mx-auto md:mx-0">
                <button className="btn btn-accent">Our Bikes</button>
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex">
            <Image src="/hero-bike.png" width={765} height={480} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
