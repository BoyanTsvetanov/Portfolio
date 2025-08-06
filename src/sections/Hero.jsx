import { useEffect, useState } from 'react';

const Hero = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js";
    script.async = true;

    script.onload = () => {
      // Wait a bit for the custom element to initialize/render
      setTimeout(() => {
        setIsSplineLoaded(true);
      }, 500);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className='w-full h-dvh max-sm:h-[35dvh] max-lg:max-h-[40dvh] max-sm:pt-14 relative'>
      {!isSplineLoaded && (
        <div className="absolute inset-0 flex items-center justify-center  z-10">
          <div className="w-2/3 h-2/3 bg-gray-300 animate-pulse rounded-lg" />
        </div>
      )}
      <spline-viewer
        loading-anim-type="none"
        url="https://prod.spline.design/pxy8IAoIBJ7oMhfj/scene.splinecode"
        style={{ visibility: isSplineLoaded ? 'visible' : 'hidden' }}
      />
    </section>
  );
};

export default Hero;
