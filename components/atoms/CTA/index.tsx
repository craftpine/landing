/* eslint-disable react/no-unescaped-entities */
const CTA = () => {
  return (
    <div className="bg-indigo-600 p-6 md:px-20 md:py-16 mt-16 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
      <h2 className="text-white text-4xl md:text-6xl tracking-tight">
        Build faster websites.
      </h2>

      <p className="mt-4 text-lg md:text-xl text-white text-opacity-90 lg:text-xl">
        Pull content from anywhere and serve it fast with Astro's next-gen
        island architecture.
      </p>
      <div className="mt-5 px-8 py-4 text-lg font-medium text-center text-indigo-600 bg-white rounded-md ">
        Get Started
      </div>
    </div>
  );
};

export default CTA;
