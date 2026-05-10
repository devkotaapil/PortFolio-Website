import React from "react";

function Card({ title, description, imageUrl }) {
  return (
    <div className="border-2 p-2 sm:p-4 mt-5 rounded-2xl hover:shadow-lg transition-shadow">
      <img
        src={imageUrl}
        alt={title}
        className="h-40 sm:h-48 w-full object-cover rounded-lg"
      />
      <div className="">
        <h2 className="text-lg sm:text-xl font-medium p-2">{title}</h2>
        <p className="line-clamp-3 text-sm p-2">{description}</p>
      </div>
    </div>
  );
}
export default Card;
