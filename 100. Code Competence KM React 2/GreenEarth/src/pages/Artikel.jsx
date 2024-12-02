// src/pages/Artikel.js

import React from "react";

const Artikel = () => {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
      {/* Bagian Teks */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-red-800 mb-6">
          The Impact of Environmental Pollution
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          This article explores the critical topic of environmental pollution
          and its far-reaching effects. Pollution has become a pressing global
          issue, affecting not only the natural world but also human health and
          the overall quality of life. This topic covers various forms of
          pollution, such as air, water, and soil pollution, each contributing
          to significant environmental degradation.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Furthermore, understanding the impact of pollution is crucial for
          raising awareness and driving action towards a sustainable future. The
          continuous release of harmful pollutants into the environment can lead
          to irreversible damage, including the loss of biodiversity, climate
          change, and health crises. By addressing the root causes of pollution
          and promoting eco-friendly practices, we can help protect the planet
          for future generations.
        </p>
      </div>

      {/* Bagian Gambar */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-6">
        <img
          src="/img/polusi.jpg"
          alt="Gambar 1"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
        <img
          src="/img/sampah3.jpg"
          alt="Gambar 2"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
        <img
          src="/img/kering.jpg"
          alt="Gambar 3"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
        <img
          src="/img/kotor.jpg"
          alt="Gambar 4"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default Artikel;
