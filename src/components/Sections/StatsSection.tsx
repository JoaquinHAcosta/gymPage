import React from 'react'

export const StatsSection = () => {
  return (
    <section className="bg-[#030c14] h-[25vh] w-full relative">
      <div className="w-[80%] h-[25vh] bg-[#fd3d0c] bottom-20 absolute transform translate-x-52 grid grid-cols-4 font-bold text-3xl text-white gap-3 *:first:p-14">
        <div>
          <label className="text-5xl">100+</label>
          <p>Happy Client</p>
        </div>
        <div>
          <label className="text-5xl">500+</label>
          <p>Complete Projects</p>
        </div>
        <div>
          <label className="text-5xl">500+</label>
          <p>Running Work</p>
        </div>
        <div>
          <label className="text-5xl">1M+</label>
          <p>Winning award</p>
        </div>
      </div>
    </section>
  )
}
