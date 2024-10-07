import SportList from "./SportList"

const SportsSection = () => {

  return (
    
    <section className="py-12 sm:py-16">
      <div className="mx-auto grid justify-items-center max-w-7xl gap-x-8 gap-y-12 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl flex items-center">
          <h2 className="text-3xl font-bold tracking-tight text-bluejo sm:text-4xl border-b border-yellowjo">
            Épreuves sportives
          </h2>
        </div>
        <SportList />
      </div>
    </section>
  )
}

export default SportsSection