import React from "react";

const cards = [
  {
    image: "/img/air1.jpg",
    title: "Saving Water",
    description:
      "Water conservation projects save thousands of liters daily, protecting vital resources for future generations.",
    bgColor: "bg-yellow-300",
  },
  {
    image: "/img/hematenergi.jpg",
    title: "Saving Energy",
    description:
      "Energy conservation efforts save thousands of kilowatt-hours daily, preserving vital resources for future generations.",
    bgColor: "bg-pink-200",
  },
  {
    image: "/img/hewan.jpeg",
    title: "Saving Wildlife",
    description:
      "Wildlife conservation efforts protect thousands of species daily, ensuring biodiversity and preserving ecosystems for future generations.",
    bgColor: "bg-green-300",
  },
  {
    image: "/img/kendaraanumum.jpeg", // Add a new image path
    title: "Using Public Transportation",
    description:
      "Public transportation initiatives reduce carbon emissions significantly every day, promoting cleaner air and conserving resources for a greener future.",
    bgColor: "bg-blue-200",
  },
  {
    image: "/img/daurulang.jpg", // Add a new image path
    title: "Reduce, Reuse, Recycle",
    description:
      "Practicing reduce, reuse, recycle minimizes waste and conserves natural resources daily, helping to protect the environment and ensure a sustainable future for generations to come.",
    bgColor: "bg-orange-300",
  },
  {
    image: "/img/kebunsayur.jpg", // Add a new image path
    title: "Home Gardening",
    description:
      "Growing your own garden at home enriches the soil, reduces carbon footprint, and provides fresh produce daily, promoting a healthier environment and a sustainable way of living for future generations.",
    bgColor: "bg-red-300",
  },
];

const Card = () => {
  return (
    <div className="container mx-auto mt-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`rounded-xl overflow-hidden shadow-lg ${card.bgColor}`}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
