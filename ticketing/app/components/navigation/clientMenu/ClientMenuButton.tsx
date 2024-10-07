import { MenuButton } from "@headlessui/react"
import { UserIcon } from "@heroicons/react/24/outline"

const ClientMenuButton = () => {
  
  return (

    <div>
      <MenuButton className="relative flex rounded-full text-sm text-bluejo hover:text-yellowjo">
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Ouvrir menu client</span>
        <UserIcon aria-hidden="true" className="h-8 w-8" />
      </MenuButton>
    </div>
  )
}

export default ClientMenuButton