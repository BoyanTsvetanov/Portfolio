
const Contacts = () => {
  return (
    <footer name="Contact" className='relative mt-10 bg-dark dark:bg-light flex flex-col justify-center items-center px-[10%]'>
        <h1 className='text-5xl dark:text-primary-light text-primary-dark py-4 font-poppins font-bold'>Contact</h1>
        <div className='flex w-full justify-center gap-6 max-sm:gap-2 flex-nowrap mb-8'>
          <a href="mailto:boyantsvetanov05@gmail.com" title="E-mail" target="_blank"
            className='bg-light rounded-full w-20 h-20 max-md:w-12 max-md:h-12 flex justify-center items-center text-5xl max-sm:text-3xl hover:rotate-360 hover:scale-105 text-accent-dark-red hover:bg-dark transition-all duration-500'>
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:0887377160" title="Phone" 
            className='bg-light rounded-full w-20 h-20 max-md:w-12 max-md:h-12 flex justify-center items-center text-5xl max-sm:text-3xl hover:rotate-360 hover:scale-105 text-accent-dark-red hover:bg-dark transition-all duration-500'>
            <i className="fas fa-phone"></i>
          </a>
          <a href="#" title="Sofia, Bulgaria" aria-disabled="true"
            className='bg-light rounded-full w-20 h-20 max-md:w-12 max-md:h-12 flex justify-center items-center text-5xl max-sm:text-3xl hover:rotate-360 hover:scale-105 text-accent-dark-red hover:bg-dark transition-all duration-500'>
            <i className="fas fa-map-marker-alt"></i>
          </a>
          <a href="https://www.linkedin.com/in/boyan-tsvetanov-26aa2a32b/" title="LinkedIn" target="_blank"
            className='bg-light rounded-full w-20 h-20 max-md:w-12 max-md:h-12 flex justify-center items-center text-5xl max-sm:text-3xl hover:rotate-360 hover:scale-105 text-accent-dark-red hover:bg-dark transition-all duration-500'>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/BoyanTsvetanov" title="GitHub" target="_blank"
            className='bg-light rounded-full w-20 h-20 max-md:w-12 max-md:h-12 flex justify-center items-center text-5xl max-sm:text-3xl hover:rotate-360 hover:scale-105 text-accent-dark-red hover:bg-dark transition-all duration-500'>
            <i className="fab fa-github"></i>
          </a>
        </div>

    </footer>
  )
}

export default Contacts