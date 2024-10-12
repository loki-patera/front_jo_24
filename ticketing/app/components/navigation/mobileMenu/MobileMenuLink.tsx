import { LinkType } from "@/app/types/LinkType"
import { DisclosureButton } from "@headlessui/react"

interface LinkProps {
  link: LinkType
}

const MobileMenuLink: React.FC<LinkProps> = ({
  link
}) => {

  return (
    
    <DisclosureButton
      as="a"
      href={link.href}
      className={"text-bluejo hover:bg-yellowlightjo hover:text-bluedarkjo block rounded-md px-3 py-2 font-medium"}
    >
      {link.name}
    </DisclosureButton>
  )
}

export default MobileMenuLink