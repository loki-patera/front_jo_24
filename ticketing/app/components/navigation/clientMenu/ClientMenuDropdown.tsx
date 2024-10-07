import { Menu } from "@headlessui/react"
import ClientMenuButton from "./ClientMenuButton"
import ClientMenuList from "./ClientMenuList"

const ClientMenuDropdown = () => {
  return (
    <Menu as="div" className="relative ml-3">
      <ClientMenuButton />
      <ClientMenuList />
    </Menu>
  )
}

export default ClientMenuDropdown