import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";

function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch();
  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-500 ">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover h-[276px]" />
      </div>
      <div className="text-2xl font-semibold ">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500 ">RS {price}</div>
        <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button
        className="w-full p-3 bg-green-500 rounded-xl cursor-pointer text-white hover:bg-green-400 transition-all"
        onClick={() =>
          dispatch(
            AddItem({ id: id, name: name, price: price, image: image, qty: 1 })
          )
        }
      >
        Add to dish
      </button>
    </div>
  );
}

export default Card;
