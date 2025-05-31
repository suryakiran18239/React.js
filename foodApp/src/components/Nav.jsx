import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

function Nav({ handleSearch }) {
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-[32px] md:px-8">
      {/* Logo */}
      <div className="w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500 " />
      </div>

      {/* Search Input */}
      <form className="w-[40%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]">
        <IoSearch className="w-[20px] h-[20px] text-green-500" />
        <input
          type="text"
          placeholder="Search items..."
          className="w-[100%] outline-none text-[16px] md:text-[20px]"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>

      {/* Bag */}
      <div className="w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl relative">
        <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
          0
        </span>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
}

export default Nav;
