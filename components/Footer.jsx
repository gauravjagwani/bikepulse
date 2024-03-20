import Link from "next/link";
import { Input } from "./ui/input";
import {
  RiYoutubeFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-[#01050e] text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="capitalize leading-tight mb-2">
              Subscribe to our Newsletter
            </h2>
            <p className="text">
              Be the First to get latest news about trends, promotions, and much
              more!
            </p>
          </div>
          <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5 ">
            <Input placeholder="Your email address" />
            <button className="btn w-full mx:max-w-[150px] h-[60px] btn-accent xl:max-w-[150px]">
              Join
            </button>
          </form>
          <div className="flex gap-8 mx-auto mb-3">
            <Link href="https://www.youtube.com/">
              <RiYoutubeFill size={25} />
            </Link>
            <Link href="https://facebook.com/">
              <RiFacebookBoxFill size={25} />
            </Link>
            <Link href="https://www.instagram.com/">
              <RiInstagramFill size={25} />
            </Link>
            <Link href="https://twitter.com/">
              <FaXTwitter size={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-6 border-t border-white/5 text-white/60">
        Copyright &copy; 2024 BikePulse. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
