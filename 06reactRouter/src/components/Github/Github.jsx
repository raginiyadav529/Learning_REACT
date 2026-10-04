import React, { useEffect, useState } from "react";
import { data, useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData]= useState([])
  // useEffect(()=>{

  //     fetch('https://api.github.com/users/raginiyadav529')
  //     .then(response=>response.json())
  //     .then(data=> {
  //         console.log(data)
  //         setData(data)
  //     })
  // } ,[])

  return (
    <>
      <div className="text-center text-3xl bg-gray-700 text-white m-10 pt-5">
        Github Followers : {data.followers}
        <img
          className="rounded-full object-cover shadow-white shadow-lg hover:cursor-pointer hover:scale-110 transition-transform duration-200 mt-3 pl-6 pb-5 "
          src={data.avatar_url}
          alt="Git picture"
          width={300}
        />
      </div>
    </>
  );
}
export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/raginiyadav529");
  return response.json();
};
