import Link from "next/link"
import Logo from "./navigation/Logo"

const Footer = () => {

  return (

    <div className="py-4 sm:py-8">
      <div className="mx-auto max-w-7xl pt-6 px-6 lg:px-8 border-t border-yellowjo">
        <ul className="grid grid-cols-1 gap-x-4 gap-y-8 text-center lg:grid-cols-3">
          <li className="mx-auto flex max-w-xs flex-col gap-y-4">
            <Logo />
          </li>
          <li className="mx-auto flex max-w-xs flex-col gap-y-4">
            <Link
              href="/legal"
              className="text-bluejo border-b border-yellowjo hover:border-bluejo hover:text-yellowdarkjo"
            >
              Mentions légales
            </Link>
          </li>
          <li className="mx-auto flex max-w-xs flex-col gap-y-4">
            <Link
              href="/privacyPolicy"
              className="text-bluejo border-b border-yellowjo hover:border-bluejo hover:text-yellowdarkjo"
            >
              Politique de confidentialité
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer