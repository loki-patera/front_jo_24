import Image from "next/image"
import Link from "next/link"

const Logo = () => {

  return (
    
      <Link href="/" className="-m-1.5 p-1.5">
        <Image
          alt="Logo de la billetterie des JO 2024"
          src="/jo-logo.png"
          className="h-8 w-auto"
          height={0}
          width={175}
          priority={true}
        />
      </Link>
  )
}

export default Logo