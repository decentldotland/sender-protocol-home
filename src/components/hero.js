const heroCopy = {
  title: "On-chain notifications for dApps",
  description: "Cross-chain, gasless, and easy to integrate"
}



function Hero() {
  return (


    <section>
      <div class="bg-[#21275A]">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            <span>{heroCopy.title}</span>
          </h1>
          <p class="mb-6 text-lg font-thin text-white lg:text-xl sm:px-16 xl:px-48">
            {heroCopy.description}
          </p>



          <div class="flex p-6 mb-6 flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 text-xl">

            {/*    <a target="_blank noopener noreferrer"  href="" class="
            
            inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black hover:ring-2 hover:ring-black rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-black bg-[#ffff00]">
              <span class="lg:text-xl">Read the docs</span>
            </a>

        */}

            <a target="_blank noopener noreferrer" href="https://github.com/decentldotland/sender-protocol" class="bg-[#EC3535] inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full hover:drop-shadow-xl focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              <span class="lg:text-xl">Read the docs</span>
            </a>
            
          </div>
          <img className='m-auto' alt="Sender Protocol hero" src={`/sender-line-2.svg`} />
        </div>
      
      </div>
    </section>
  )
}

export default Hero;
