import React from "react";

function Card({buttonName, sampleTest="Lorem ipsum abcddd", headingtext,}){
    console.log(buttonName)
    return(
        <>
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img 
          src="https://tse2.mm.bing.net/th/id/OIP.ex75g4-5QfD5ES2M34-MnwHaHa?rs=1&pid=ImgDetMain"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{headingtext}</h2>
            <p className="text-gray-400">
            {sampleTest}
            </p>
          </div>
          <button buttonName="More read here"
            type="button"
            className="flex items-center justify-center w-full p-3 text-sky-400 font-semibold tracking-wide rounded-md"
          >
            {buttonName || "Read More"}
          </button>
        </div>
      </div>
      </>
    )
}

export default Card