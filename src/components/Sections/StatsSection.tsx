import React from 'react'

export const StatsSection = () => {
  return (
    <section className="bg-[#030c14] h-[200px] lg:h-[32vh] hidden md:block w-full">
      <div className="w-full lg:w-[80%] h-fit bg-[#fd3d0c] max-w-5xl mx-auto transform grid grid-cols-2 xl:grid-cols-4 font-bold lg:text-3xl text-white *:first:py-4 lg:*:first:p-14 *:first:text-center">
        <div>
          <label className="text-xl lg:text-5xl">100+</label>
          <p>Happy Client</p>
        </div>
        <div>
          <label className="text-xl lg:text-5xl">500+</label>
          <p>Complete Projects</p>
        </div>
        <div>
          <label className="text-xl lg:text-5xl">500+</label>
          <p>Running Work</p>
        </div>
        <div>
          <label className="text-xl lg:text-5xl">1M+</label>
          <p>Winning award</p>
        </div>
      </div>
    </section>
  )
}
