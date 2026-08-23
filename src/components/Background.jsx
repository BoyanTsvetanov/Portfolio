import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-dvh opacity-100 max-md:opacity-25 -z-10 pointer-events-none">
      {/* <div
        id="global-bg-color"
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "red" }}
      /> */}
      {/* <video
        src="./videos/pink.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute top-0 left-0 saturate-0 contrast-110 select-none mix-blend-darken"
      /> */}
      <img
        src="./images/noise.jpg"
        alt="noise mask"
        className="absolute inset-0 w-full h-full object-cover mix-blend-difference opacity-15 dark:invert pointer-events-none"
      />
    </div>
  );
};

export default Background;
