// src/AboutUs.jsx

import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white-200 p-10">
      <h2 className="text-4xl font-bold text-center mb-4">About Us</h2>

      {/* New section for small images */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex justify-center">
          <img src="/img1.jpg" alt="Image 1" className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <img src="/img2.jpg" alt="Image 2" className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <img
            src="/img3-.jpg"
            alt="Image 3"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex justify-center">
          <img src="/img4.jpg" alt="Image 4" className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <img src="/img5.jpg" alt="Image 5" className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <img
            src="/img6-.jpg"
            alt="Image 6"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <p className="text-lg text-gray-800 text-center">
        Skincare is an essential part of a healthy lifestyle. It involves the
        practices that support the health, appearance, and feel of the skin.
        This includes cleansing, moisturizing, and protecting the skin from the
        sun and environmental factors. A good skincare routine can help to
        prevent breakouts, wrinkles, and other skin problems. It can also help
        to improve the skin's overall appearance and texture. With so many
        products and treatments available, it's important to find a routine that
        is right for your individual skin type and concerns.
      </p>

      <p className="text-lg text-gray-800 text-center mt-4">
        This is a website landing page design featuring a minimalist
        illustration of a mountain range. The design includes a simple header
        with navigation links, a bold welcome message, and a call to action
        button. The use of blue tones creates a serene and calming atmosphere,
        which may be suitable for a website focusing on nature, travel, or
        relaxation.
      </p>
    </section>
  );
};

export default AboutUs;
