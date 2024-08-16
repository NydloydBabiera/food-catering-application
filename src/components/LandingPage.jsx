import React from "react";
import beefsteak from "../resources/images/beef-steak.jpg";
import caldereta from "../resources/images/Caldereta.jpg";
import friedchicken from "../resources/images/friend-chicken.jpg";
import mangofloat from "../resources/images/mango-float.jpg";
import shanghai from "../resources/images/shanghai.jpg";

const LandingPage = () => {
  const imgList = [beefsteak, caldereta, friedchicken, mangofloat, shanghai];
  return (
    <div className="my-24">
      <div className="my-8">
        <h1 className="text-6xl font-sans bold">Mama Bebing's Catering Services</h1>
        <h1 className="text-4xl font-serif italic my-4">"A taste of home away from home"</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="rounded shadow-xl bg-white-500 overflow-hidden mx-2 my-2">
          <img
            src={beefsteak}
            className="object-contain object-cover w-80 h-64"
          />
          <span className="text-2xl font-sans">BEEF STEAK</span>
        </div>
        <div className="rounded shadow-xl bg-white-500 overflow-hidden mx-2 my-2">
          <img
            src={caldereta}
            className="object-contain object-cover rounded-lg shadow-xl w-80 h-64"
          />
          <span className="text-2xl font-sans text-bold my-4">CALDERETA</span>
        </div>
        <div className="rounded shadow-xl bg-white-500 overflow-hidden mx-2 my-2">
          <img
            src={friedchicken}
            className="object-contain object-cover rounded-lg shadow-xl w-80 h-64"
          />
          <span className="text-2xl font-sans text-bold my-4">
            FRIED CHICKEN
          </span>
        </div>
        <div className="rounded shadow-xl bg-white-500 overflow-hidden mx-2 my-2">
          <img
            src={mangofloat}
            className="object-contain object-cover rounded-lg shadow-xl w-80 h-64"
          />
          <span className="text-2xl font-sans text-bold my-4">MANGO FLOAT</span>
        </div>
        <div className="rounded shadow-xl bg-white-500 overflow-hidden mx-2 my-2">
          <img
            src={shanghai}
            className="object-contain object-cover rounded-lg shadow-xl w-80 h-64"
          />
          <span className="text-2xl font-sans text-bold my-4">SHANGHAI</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
