import React from "react";
import beefsteak from "../resources/images/beef-steak.jpg";
import calderata from "../resources/images/Caldereta.jpg";
import friedchicken from "../resources/images/friend-chicken.jpg";
import mangofloat from "../resources/images/mango-float.jpg";
import shanghai from "../resources/images/shanghai.jpg";

const Catering = () => {
    const imgList = [beefsteak,calderata,friedchicken,mangofloat,shanghai]
  return (
    <div className="my-24">
      <h1 className="text-4xl my-4">Plan your next event with us!</h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="bg-white-500 shadow-xl rounded overflow-hidden w-80">
          <img src={beefsteak} alt="Beef Steak" className="w-80 h-64" />
          <h1 className="text-xl bold">Beef Steak</h1>
          <p className="mx-2">
            {" "}
            Beef steak dish also known as "Bistek Tagalog" that features tender
            slices of beef cooked in a rich sauce made from soy sauce, calamansi
            (or lemon), onions, and sometimes garlic. It's typically served with
            rice and is often garnished with fried onions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Catering;
