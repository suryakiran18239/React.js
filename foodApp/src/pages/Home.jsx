import Categories from "../Category";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { food_items } from "../food";
import { useContext } from "react";
import { dataContext } from "../context/UserContext";

function Home() {
  let { cate, setCate, input } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }

  return (
    <div className="w-full min-h-[100vh] bg-slate-200">
      <Nav />
      {/* Display categories only if input is empty */}
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-6 w-[100%]">
          {Categories.map((item) => {
            return (
              <div
                className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-md hover:bg-green-200 cursor-pointer transition-all duration-200"
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}
      <div className="w-full flex flex-wrap gap-5 justify-center align-center pt-8 pb-8 px-5">
        {cate.map((item) => {
          return (
            <Card
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              type={item.food_type}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
