import { DisclosureButton } from "@headlessui/react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import { XMarkIcon } from "@heroicons/react/24/outline"

const MobileMenuButton = () => {
  return (
    <DisclosureButton
      className="group relative inline-flex items-center justify-center rounded-md p-2 text-yellowjo
        hover:bg-bluemidlightjo hover:text-yellowmidlightjo focus:outline-none focus:ring-2 focus:ring-inset
        focus:ring-white"
    >
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Ouvrir menu principal</span>
      <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
      <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
    </DisclosureButton>
  )
}

export default MobileMenuButton