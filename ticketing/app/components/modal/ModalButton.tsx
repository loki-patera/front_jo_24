interface ModalButtonProps {
  label: string
  className: string
  onClick: () => void
}

const ModalButton: React.FC<ModalButtonProps> = ({
  label,
  className,
  onClick
}) => {

  return (

    <div
      className={`inline-flex w-full justify-center rounded-md cursor-pointer px-3 py-2 text-sm font-semibold shadow-sm
        sm:w-auto ${className}`}
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default ModalButton