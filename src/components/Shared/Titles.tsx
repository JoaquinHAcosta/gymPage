type Titulos = {
  sub: string
  main: string
}

export const Titles = ({ sub, main }: Titulos) => {
  return (
    <div className="flex flex-col items-center ">
      <label className="flex text-[rgb(253,61,12)] uppercase font-bold text-xl">
        {sub}
      </label>
      <h1 className="text-5xl text-center font-bold md:text-8xl">{main}</h1>
    </div>
  )
}
