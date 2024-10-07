import { LinkType } from "./Navbar"

interface LinkProps {
  link: LinkType
}

const NavLink: React.FC<LinkProps> = ({
  link
}) => {

  return (
    
    <a
      href={link.href}
      className={"text-bluejo hover:bg-yellowlightjo hover:text-bluedarkjo rounded-md px-3 py-2 font-medium"}
    >
      {link.name}
    </a>
  )
}

export default NavLink