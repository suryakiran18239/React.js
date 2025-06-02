import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { useContext, useEffect } from "react";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";

function Nav() {
  let { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(dataContext);
  useEffect(() => {
    let newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newList);
  }, [input]);

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-[32px] md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500 " />
      </div>
      <form
        className="w-[40%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="w-[20px] h-[20px] text-green-500" />
        <input
          type="text"
          placeholder="Search items..."
          className="w-[100%] outline-none text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className="w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl relative cursor-pointer"
        onClick={() => setShowCart(true)}
      >
        <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
          0
        </span>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
}

export default Nav;
