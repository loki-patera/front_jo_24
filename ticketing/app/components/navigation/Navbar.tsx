import { Disclosure, DisclosurePanel } from "@headlessui/react"
import Logo from "./Logo"
import CartButton from "./CartButton"
import ClientMenuDropdown from "./clientMenu/ClientMenuDropdown"
import MobileMenuButton from "./mobileMenu/MobileMenuButton"
import NavLink from "./NavLink"
import MobileMenuLink from "./mobileMenu/MobileMenuLink"

const links = [
  { name: 'Épreuves sportives', href: '#' },
  { name: 'Réserver', href: '#' }
]

export type LinkType = {
  href: string
  name: string
}

const Navbar = () => {

  return (
    <Disclosure as="nav" className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-b border-yellowjo">
        <div className="relative flex h-16 items-center justify-between">

          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <MobileMenuButton />
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Logo />
            </div>

            <div className="hidden sm:mr-6 sm:pr-6 sm:block">
              <div className="flex space-x-4">
                {links.map((link) => (
                  <NavLink
                    key={link.name}
                    link={link}
                  />
                ))}
              </div>
            </div>

          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <CartButton />
            <ClientMenuDropdown />
          </div>
          
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {links.map((link) => (
            <MobileMenuLink
              key={link.name}
              link={link}
            />
          ))}
        </div>
      </DisclosurePanel>

    </Disclosure>
  )
}

export default Navbar