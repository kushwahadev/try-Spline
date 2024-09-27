import Spline from "@splinetool/react-spline/next";
import { FaArrowPointer } from "react-icons/fa6/index";
import { Text } from "./Text";

export default function Guitar() {
  return (
    <main className="bg-[#212121]">
      <h1 className="flex justify-center items-center">
        <Text />
      </h1>

      <h2 className="flex justify-center items-center gap-8 pt-10 z-50 text-pretty ">
        <span className="flex justify-center items-center border border-cyan-600 hover:bg-cyan-600 transition-all duration-1000 rounded-xl p-6">
          Hold and Move your
          <span className="pl-4">
            <FaArrowPointer />
          </span>
        </span>{" "}
        <span className="border border-teal-600 rounded-xl p-6 hover:bg-teal-600 transition-all duration-1000">
          Press keys for music{" "}
        </span>
      </h2>
      <p className="flex justify-center items-center gap-16 pt-5 cursor-pointer">
        <span className=" text-3xl font-bold text-[#016A70] transition-all duration-500 hover:text-xl ">
          1
        </span>
        <span className=" text-3xl font-bold text-[#C96868] transition-all duration-500 hover:text-xl ">
          2
        </span>
        <span className=" text-3xl font-bold text-[#48CFCB] transition-all duration-500 hover:text-xl ">
          4
        </span>
        <span className=" text-3xl font-bold text-[#D8A25E] transition-all duration-500 hover:text-xl ">
          5
        </span>
        <span className=" text-3xl font-bold text-[#A594F9] transition-all duration-500 hover:text-xl ">
          6
        </span>
        <span className=" text-3xl font-bold text-[#6A9C89] transition-all duration-500 hover:text-xl ">
          8
        </span>
        <span className=" text-3xl font-bold text-[#8EACCD] transition-all duration-500 hover:text-xl ">
          1
        </span>
        <span className=" text-3xl font-bold text-[#697565] transition-all duration-500 hover:text-xl ">
          9
        </span>
        <span className=" text-3xl font-bold text-[#E7CCCC] transition-all duration-500 hover:text-xl ">
          q
        </span>
        <span className=" text-3xl font-bold text-[#00CCDD] transition-all duration-500 hover:text-xl ">
          w
        </span>
        <span className=" text-3xl font-bold text-[#FFD7C4] transition-all duration-500 hover:text-xl ">
          e
        </span>
        <span className=" text-3xl font-bold text-[#FFE1FF] transition-all duration-500 hover:text-xl ">
          r
        </span>
        <span className=" text-3xl font-bold text-[#507687] transition-all duration-500 hover:text-xl ">
          t
        </span>
        <span className=" text-3xl font-bold text-[#CBE2B5] transition-all duration-500 hover:text-xl ">
          y
        </span>
        <span className=" text-3xl font-bold text-[#FF8F8F] transition-all duration-500 hover:text-xl ">
          u
        </span>
        <span className=" text-3xl font-bold text-[#F1DEC9] transition-all duration-500 hover:text-xl ">
          i
        </span>
        <span className=" text-3xl font-bold text-[#E6FF94] transition-all duration-500 hover:text-xl ">
          o
        </span>
        <span className=" text-3xl font-bold text-[#DEAC80] transition-all duration-500 hover:text-xl ">
          p
        </span>
      </p>
      <p className="flex justify-center items-center gap-16"></p>
      <Spline scene="https://prod.spline.design/rJGM8ILOxBCwQsYz/scene.splinecode" />
    </main>
  );
}
