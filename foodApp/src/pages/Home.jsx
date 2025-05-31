import Categories from "../Category";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { food_items } from "../food";
import { useState } from "react";

function Home() {
  const [cate, setCate] = useState(food_items);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function filter(category) {
    setCategoryFilter(category);
    applyFilters(category, searchTerm);
  }

  function handleSearch(term) {
    setSearchTerm(term);
    applyFilters(categoryFilter, term);
  }

  function applyFilters(category, term) {
    let filteredList = food_items;

    if (category !== "All") {
      filteredList = filteredList.filter(
        (item) => item.food_category === category
      );
    }

    if (term.trim() !== "") {
      filteredList = filteredList.filter((item) =>
        item.food_name.toLowerCase().includes(term.toLowerCase())
      );
    }

    setCate(filteredList);
  }

  return (
    <div className="w-full min-h-[100vh] bg-slate-200">
      <Nav handleSearch={handleSearch} />

      <div className="flex flex-wrap justify-center items-center gap-6 w-[100%]">
        {Categories.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-md hover:bg-green-200 cursor-pointer transition-all duration-200"
              onClick={() => filter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>

      <div className="w-full flex flex-wrap gap-5 justify-center align-center pt-8 pb-8 px-5">
        {cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
