import Image from "next/image"
import cyclisme from "/public/cyclisme.jpg"

const HeaderImage = () => {

  return (
    <Image
      alt="Cyclisme"
      src={cyclisme}
      className="absolute inset-0 -z-10 h-full w-full object-cover"
      width={2400}
      height={0}
      priority={true}
    />
  )
}

export default HeaderImage