import React,{useEffect} from 'react'

const Hero = () => {

    useEffect(() => {
        // Load the Spline Viewer script dynamically if needed
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

  return (
    <section className='w-full h-dvh max-sm:h-[20dvh] max-lg:max-h-[40dvh]'>
        <spline-viewer loading-anim-type="none" url="https://prod.spline.design/pxy8IAoIBJ7oMhfj/scene.splinecode"></spline-viewer>

    </section>
  )
}

export default Hero