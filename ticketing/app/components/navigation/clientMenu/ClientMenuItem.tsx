import { MenuItem } from "@headlessui/react"

const clientMenu = [
  { name: 'Compte', href: '#' },
  { name: 'Déconnexion', href: '#' }
]

const ClientMenuItem = () => {

  return (
    
    <>
      {clientMenu.map((item) => (
        <MenuItem key={item.name}>
          <a href={item.href} className="block px-4 py-2 text-sm text-bluejo data-[focus]:bg-yellowlightjo">
            {item.name}
          </a>
        </MenuItem>
      ))}
    </>
  )
}

export default ClientMenuItem