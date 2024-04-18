import { paths } from "@/lib";
import Link from "next/link";

export default function HeroSection({ link }: { link: string }) {
  return (
    <div className="flex flex-row items-center justify-between gap-6 px-14">
      <div className="flex flex-col gap-2 w-1/2 h-1/6 py-28">
        <div className="text-sm">
          POSTED ON <span className="font-bold">FEB 16, 2024</span>
        </div>
        <div className="text-3xl font-bold">
          Exploring the Impact and Implications of Windfall Taxes
        </div>
        <div className="mt-1 text-xs">By Siddhant Shankar | New Delhi </div>
        <div className="mt-2 text-sm">
          Delve into the recent reimposition of windfall taxes on domestic
          petroleum crude by the Indian government and its ramifications on the
          industry. Analyze the rationale behind the implementation of windfall
          taxes, focusing on their role in redistributing unexpected gains.
        </div>
        <Link href={`${paths.gist}/${link}`}>
          <button className="w-28 h-10 bg-primary-dark text-white mt-6 text-sm">
            Read More &gt;
          </button>
        </Link>
      </div>
      <div className="w-1/2 pt-8">
        <img
          src="/Images/hero.webp"
          alt="hero-image"
          className=" w-full h-[500px] object-cover"
        />
      </div>
    </div>
  );
}
