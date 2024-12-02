import React, { useState, useEffect } from "react";
import Card from "./Card";
import Artikel from "./Artikel";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow data
  const slides = [
    {
      id: 1,
      imageUrl: "/img/pohon1.png", // Replace with your image path
      title: "Protecting the Environment",
      description: "It's easy to do, just take action!",
      text: "Protecting the environment is a shared responsibility that is crucial for the future of our planet. By taking simple actions like reducing plastic use, recycling waste, planting trees, and conserving energy, we can minimize our negative impact on nature.",
    },
    {
      id: 2,
      imageUrl: "/img/pohon2.png", // Replace with your image path
      title: "The Consequences of Not Protecting the Environment",
      description: "It's easy to ignore, but the damage is lasting.",
      text: "Failing to take care of the environment can lead to severe consequences for our planet's future. Ignoring simple actions like reducing plastic use, recycling waste, planting trees, and conserving energy can increase pollution, deplete natural resources, and harm ecosystems.",
    },
    {
      id: 3,
      imageUrl: "/img/pohon3.png", // Replace with your image path
      title: "Let's Build a Green Earth Together",
      description: "It's easy to make a difference—just take action!",
      text: "Protecting the environment is a shared responsibility that is essential for the future of our planet. Together, we can create a healthier, greener Earth by taking simple steps like reducing plastic use, recycling waste, planting trees, and conserving energy.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change interval to 5000ms (5 seconds)
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="about section mt-10 py-5">
      <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center">
        {/* Slider Section */}
        <div className="w-full lg:w-6/12 mb-8 lg:mb-0">
          <div className="relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
            <img
              src={slides[currentSlide].imageUrl}
              alt={`Slide ${slides[currentSlide].id}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-6/12 lg:pl-10">
          <h2 className="text-2xl font-bold">{slides[currentSlide].title}</h2>
          <h3 className="text-lg">{slides[currentSlide].description}</h3>
          <p className="mt-2 text-gray-700">{slides[currentSlide].text}</p>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevSlide}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              &lt; Prev
            </button>
            <button
              onClick={nextSlide}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Next &gt;
            </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentSlide === index ? "bg-green-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      {/* Menambahkan Card */}
      <Artikel />
      <Card />
    </section>
  );
};

export default About;
