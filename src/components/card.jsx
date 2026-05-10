import React from 'react'

function Card({ title, description, imageUrl }) {
  return (
    <div className="border-2 p-2 rounded-2xl ">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="">
        <h2 className="text-xl font-medium p-1">{title}</h2>
        <p className="line-clamp-3 text-sm p-1">{description}</p>
      </div>
    </div>
  );
}
export default Card;