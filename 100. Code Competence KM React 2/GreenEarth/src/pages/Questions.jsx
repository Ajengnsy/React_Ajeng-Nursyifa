import React from "react";

const Questions = () => {
  const items = [
    {
      title: "100% profits for the Earth",
      description:
        "We use all our profits for environmental action, with the majority directed toward tree planting and nature conservation projects around the world.",
      icon: "🌳",
    },
    {
      title: "No greenwashing",
      description:
        "We are transparent about how much money we make each month and how much we allocate for environmental projects and tree planting.",
      icon: "🔍",
    },
    {
      title: "Collective Action",
      description:
        "The Green Earth community is the world’s largest tree-planting movement, making a difference every day.",
      icon: "👥",
    },
    {
      title: "Beyond Carbon Neutral",
      description:
        "Our solar panels generate enough energy to power our operations, surpassing the energy needed for your searches, contributing to more renewable energy and fewer fossil fuels in the energy grid.",
      icon: "☀️",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">What we stand for</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
