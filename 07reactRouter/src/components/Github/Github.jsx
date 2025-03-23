import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

function Github() {
    const [data,SetData] = useState([]);
    useEffect(() => {
      fetch ('https://api.github.com/users/suryakiran18239')
        .then(response =>response.json()
        .then(data => {
            console.log(data)
            SetData(data)
         
        })
      )
    }, [])
  return (
    <div className="text-center p-4 font-bold text-2xl bg-gray-600 text-white">
      Github followers: {data.following}
      <img src={data.avatar_url} alt="Profile picture" width={200}/>
    </div>
    
  );
}   

export default Github;