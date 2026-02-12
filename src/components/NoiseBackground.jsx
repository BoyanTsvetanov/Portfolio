import React from "react";

const NoiseBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-dvh mix-blend-difference invert opacity-15 max-md:opacity-25 -z-10">
      <img
        src="./images/noise.jpg"
        alt="background-noise"
        className="absolute w-full h-fit max-md:h-full max-md:w-fit"
      />
    </div>
  );
};

export default NoiseBackground;
