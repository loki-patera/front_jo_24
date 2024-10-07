import SportListItem from "./SportListItem"

const SportList = () => {

  return (

    <ul
      role="list"
      className="grid gap-x-8 gap-y-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-y-16 xl:col-span-2"
    >
      <SportListItem />
    </ul>
  )
}

export default SportList