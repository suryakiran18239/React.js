import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBin5Line } from "react-icons/ri";

function Card2() {
  return (
    <div className="w-full h-[120px] p-2 shadow-lg flex justify-between">
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image1} alt="" className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-5">
          <div className="text-lg font-semibold text-gray-600">Heading</div>
          <div className="w-[110px] h-[50px] bg-slate-400 flex rounded-lg shadow-lg font-semibold border-2 text-xl border-green-400 overflow-hidden">
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-green-400 hover:text-white">
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400">
              1
            </span>
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-green-400 hover:text-white">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-6">
        <span className="text-xl font-semibold text-green-500">Rs.100/-</span>
        <RiDeleteBin5Line className="h-[30px] w-[30px] text-red-500" />
      </div>
    </div>
  );
}

export default Card2;
