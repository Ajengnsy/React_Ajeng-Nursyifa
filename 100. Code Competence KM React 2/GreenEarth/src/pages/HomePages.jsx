import React from "react";

const HomePages = () => {
  return (
    <div>
      {/* Home Section */}
      <section id="about" className="about section mt-10 py-20">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap justify-between items-center">
            {/* Static Image Section */}
            <div className="w-full lg:w-7/12 mb-8 lg:mb-0 order-last lg:order-first">
              <div className="relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
                <img
                  src="/img/Sampah.jpg" // Replace with your image path
                  alt="Static Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Welcome Text Section */}
            <div className="w-full lg:w-4/12">
              <span
                className="text-gray-500 uppercase tracking-wider"
                data-aos="fade-up"
              >
                Welcome
              </span>
              <h1 className="text-3xl font-bold mb-4" data-aos="fade-up">
                Green Earth
              </h1>
              <p className="text-gray-700 mb-5" data-aos="fade-up">
                Far away, amidst the lush forests and vibrant ecosystems, lies a
                world dedicated to protecting the planet. In the heart of this
                Green Earth, nature thrives with clean air, rich soil, and
                abundant wildlife. Separated from the chaos of pollution and
                waste, this sanctuary embraces sustainability, where every step
                we take supports a healthier future. Together, we nurture the
                Earth, ensuring it remains green and vibrant for generations to
                come.
              </p>
              <p className="mt-5" data-aos="fade-up">
                <a
                  href="#"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  Get Started
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Report Section */}

      <section className="flex flex-col md:flex-row items-center justify-between py-20 px-5 md:px-20 bg-gray-50">
        {/* New Text Section */}

        <div className="md:w-1/2">
          <h3 className="text-green-700 text-sm font-bold mb-3 uppercase">
            Green Earth: A Call to Action
          </h3>

          <p className="text-gray-600 mb-6">
            The vision of a "Green Earth" emphasizes the urgent need for
            environmental stewardship. Each color in our representation
            highlights critical issues: the{" "}
            <span className="text-red-500">red segment</span> warns of waste
            pollution, the{" "}
            <span className="text-yellow-500">yellow segment</span> signifies
            biodiversity loss, the{" "}
            <span className="text-blue-500">blue segment</span> reflects water
            pollution, and the{" "}
            <span className="text-green-500">green segment</span> represents
            hope through sustainable practices. Together, we must act to protect
            our planet for future generations.
          </p>
        </div>

        {/* Donut Chart Section */}

        <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-green-700">
                Warning!!
              </span>
            </div>

            <svg viewBox="0 0 36 36" className="w-full h-full">
              {/* Background Circle */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-300"
              />

              {/* Green Segment */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="green"
                strokeWidth="2"
                strokeDasharray="80 100"
                strokeLinecap="round"
                className="text-green-500"
              />

              {/* Blue Segment */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="blue"
                strokeWidth="2"
                strokeDasharray="20 100"
                strokeDashoffset="-80"
                strokeLinecap="round"
                className="text-blue-500"
              />

              {/* Yellow Segment */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="yellow"
                strokeWidth="2"
                strokeDasharray="30 100"
                strokeDashoffset="-100"
                strokeLinecap="round"
                className="text-yellow-500"
              />

              {/* Red Segment */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="transparent"
                stroke="red"
                strokeWidth="2"
                strokeDasharray="10 100"
                strokeDashoffset="-130"
                strokeLinecap="round"
                className="text-red-500"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePages;
