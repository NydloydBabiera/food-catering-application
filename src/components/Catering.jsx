import React from "react";
import beefsteak from "../resources/images/beef-steak.jpg";
import calderata from "../resources/images/Caldereta.jpg";
import friedchicken from "../resources/images/friend-chicken.jpg";
import mangofloat from "../resources/images/mango-float.jpg";
import shanghai from "../resources/images/shanghai.jpg";
import dishes from "../resources/dishes.json";
import jobs from "../jobs.json"

const Catering = () => {
  const imgList = [beefsteak, calderata, friedchicken, mangofloat, shanghai];
  return (
    <div className="my-24">
      <h1 className="text-4xl my-4">Plan your next event with us!</h1>
      <div className="flex flex-wrap justify-center items-center">
        {jobs.map((job) => (
          <div className="bg-white-500 shadow-xl rounded overflow-hidden w-80 my-2 mx-2">
            {/* <img src={img} alt="Beef Steak" className="w-80 h-64 "/> */}
            <h1 className="text-xl bold">{job.title}</h1>
            <p className="mx-2">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catering;
