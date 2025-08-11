
const Contacts = () => {
  return (
    <footer name="Contact" className='relative mt-10 flex flex-col justify-center items-center px-[10%] md:mb-8'>
        <div className='font-poppins font-bold text-center py-8'>
          {/* <h2 className="md:hidden">Contact</h2> */}
          <p className="md:text-7xl text-5xl tracking-tight">Let's build something remarkable together</p>
        </div>
        
        <div className='flex flex-col w-full gap-4 mb-8'>
          <div className="flex max-md:flex-col w-full justify-center max-md:items-center items-stretch flex-wrap font-poppins gap-4 text-sm">
            <a href="mailto:boyantsvetanov05@gmail.com" title="E-mail" target="_blank"
              className='bg-gray-200 dark:bg-[#363636] flex flex-col justify-center items-center p-2 w-full h-full max-w-2xs xl:max-w-56 aspect-square rounded-lg gap-2 hover:-translate-y-4 transition-transform duration-300'>
              <i className="fas fa-envelope text-5xl"></i>
              <h3 className="text-xl font-bold">E-Mail</h3>
              <p className="lg:text-xs">boyantsvetanov05@gmail.com</p>
            </a>
            <a href="tel:0887377160" title="Phone" 
              className='bg-gray-200 dark:bg-[#363636] flex flex-col justify-center items-center p-2 w-full h-full max-w-2xs xl:max-w-56 aspect-square rounded-lg gap-2 hover:-translate-y-4 transition-transform duration-300'>
              <i className="fas fa-phone text-5xl"></i>
              <h3 className="text-xl font-bold">Phone</h3>
              <p>0887377160</p>
            </a>
            <a href="/" title="Sofia, Bulgaria" aria-disabled="true"
              className='bg-gray-200 dark:bg-[#363636] flex flex-col justify-center items-center p-2 w-full h-full max-w-2xs xl:max-w-56 aspect-square rounded-lg gap-2 hover:-translate-y-4 transition-transform duration-300'>
              <i className="fas fa-map-marker-alt text-5xl"></i>
              <h3 className="text-xl font-bold">Address</h3>
              <p>Sofia, Bulgaria</p>
            </a>
            <a href="https://www.linkedin.com/in/boyan-tsvetanov-26aa2a32b/" title="LinkedIn" target="_blank"
              className='bg-gray-200 dark:bg-[#363636] flex flex-col justify-center items-center p-2 w-full h-full max-w-2xs xl:max-w-56 aspect-square rounded-lg gap-2 text-lg hover:-translate-y-4 transition-transform duration-300'>
              <i className="fab fa-linkedin text-5xl"></i>
              <h3 className="text-xl font-bold">LinkedIn</h3>
            </a>
            <a href="https://github.com/BoyanTsvetanov" title="GitHub" target="_blank"
              className='bg-gray-200 dark:bg-[#363636] flex flex-col justify-center items-center p-2 w-full h-full max-w-2xs xl:max-w-56 aspect-square rounded-lg gap-2 text-lg hover:-translate-y-4 transition-transform duration-300'>
              <i className="fab fa-github text-5xl"></i>
              <h3 className="text-xl font-bold">GitHub</h3>
            </a>
          </div>
         
        </div>

    </footer>
  )
}

export default Contacts