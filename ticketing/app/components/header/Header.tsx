import HeaderImage from "./HeaderImage"

const Header = () => {

  return (
    
    <div className="relative isolate m-2 2xl:mx-48 px-6 pt-14 lg:px-8">

      <HeaderImage />

      <div className="mx-auto max-w-2xl pb-8 pt-40 sm:pb-16 sm:pt-80 lg:pb-16 lg:pt-96">
        <div className="text-center px-10">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-bluexlightjo lg:text-6xl">
            Billetterie des Jeux olympiques 2024
          </h1>
        </div>
      </div>

    </div>
  )
}

export default Header