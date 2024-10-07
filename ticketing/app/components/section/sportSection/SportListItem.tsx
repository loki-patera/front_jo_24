import Image from "next/image"

const SportListItem = () => {

  return (
    <li>
      <div>
        <div className="mb-1">
          <h3 className="text-center font-semibold leading-7 tracking-tight text-yellowdarkjo">
            
          </h3>
        </div>
        <Image
          alt=""
          src=""
          className="rounded-lg hover:border hover:border-bluejo p-1"
          width={180}
          height={0}
          style={{ cursor: 'pointer'}}
        />
      </div>
    </li>
  )
}

export default SportListItem