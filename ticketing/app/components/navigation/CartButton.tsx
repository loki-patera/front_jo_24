import { ShoppingCartIcon } from "@heroicons/react/24/outline"

const CartButton = () => {

  return (
    
    <button type="button" className="relative rounded-full p-1 text-bluejo hover:text-yellowjo">
      <span className="absolute -inset-1.5" />
      <span className="sr-only">Panier</span>
      <ShoppingCartIcon aria-hidden="true" className="h-8 w-8" />
    </button>
  )
}

export default CartButton