import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadSpline(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loadSpline) return;
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js";
    script.async = true;
    script.onload = () => setLoadSpline(true);
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, [loadSpline]);

  return (
    <section ref={ref} className="w-full h-dvh max-sm:h-[35dvh] max-lg:max-h-[40dvh] max-sm:pt-14 relative" name="Hero">
      {!loadSpline && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-2/3 h-2/3 bg-gray-300 animate-pulse rounded-lg" />
        </div>
      )}
      {loadSpline && (
        <spline-viewer
          loading-anim-type="none"
          url="https://prod.spline.design/pxy8IAoIBJ7oMhfj/scene.splinecode"
        />
      )}
    </section>
  );
};


export default Hero;
