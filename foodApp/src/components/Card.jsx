import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

function Card({ name, image, price, type }) {
  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400 ">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover h-[276px]" />
      </div>
      <div className="font-semibold text-2xl">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">Rs.{price}</div>
        <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button className="w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 cursor-pointer transition-all ">
        Add to dish
      </button>
    </div>
  );
}

export default Card;
