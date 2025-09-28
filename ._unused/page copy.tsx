import Image from "next/image";

import logo from "../assets/logo.svg";
import RoundCorner from "@/components/RoundCorner";
import TypingParagraph from "@/components/TypingParagraph";

export default function Home() {
  return (
    <div className="bg-[#212121] min-h-screen text-white">
      <div className="fixed top-0 w-full">
        <div className="bg-[#212121] py-10 h-38 text-center">
          <Image src={logo} className="h-11 inline" alt="Citronote 3" />
          <div className="text-white mt-4 text-sm">
            Beta Preview for Hack Club: Summer of Making
          </div>
        </div>
        <div className="container mx-auto flex justify-between">
          <RoundCorner className="text-[#212121] h-8" />
          <RoundCorner className="text-[#212121] h-8 rotate-90" />
        </div>
      </div>

      <div className="mt-28 pt-22 container mx-auto bg-[#2a2a2a] py-4 min-h-screen px-14">
        <TypingParagraph text="abc" />
      </div>
    </div>
  );
}
