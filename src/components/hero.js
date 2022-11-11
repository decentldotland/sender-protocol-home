

const heroCopy = {
  title: "Permanent podcasting on Arweave",
  description: "Pay once, store forever, never lose your episodes"
}



function Hero() {
  return (


    <section class="bg-gray-100">
      <div class="bg-gray-100">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            <span class="text-black">{heroCopy.title}</span>
          </h1>
          <p class="mb-6 text-lg font-thin text-black lg:text-xl sm:px-16 xl:px-48 dark:text-gray-100">
            {heroCopy.description}
          </p>



          <div class="flex p-6 flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 text-xl">

            {/*    <a target="_blank noopener noreferrer"  href="https://docs.permacast.dev" class="
            
            inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black hover:ring-2 hover:ring-black rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-black bg-[#ffff00]">
              <span class="lg:text-xl">Read the docs</span>
            </a>

        */}

            <a target="_blank noopener noreferrer" href="https://legacy.permacast.dev" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black bg-[#ffff00] hover:drop-shadow-xl focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              <span class="lg:text-xl">Launch app</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
