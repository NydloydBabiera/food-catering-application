import React from "react";

const Details = () => {
  return (
    <div className="bg-white-500 shadow-xl rounded overflow-hidden w-80">
      <img src={beefsteak} alt="Beef Steak" className="w-80 h-64" />
      <h1 className="text-xl bold">Beef Steak</h1>
      <p className="mx-2">
        {" "}
        Beef steak dish also known as "Bistek Tagalog" that features tender
        slices of beef cooked in a rich sauce made from soy sauce, calamansi (or
        lemon), onions, and sometimes garlic. It's typically served with rice
        and is often garnished with fried onions.
      </p>
    </div>
  );
};

export default Details;
