import React from "react"

interface ItemType {
  href: string
  icon: React.FC<any>
}

const Item: React.FC<ItemType> = props => {
  const { icon: Icon } = props
  return (
    <a
      href={props.href}
      className="group border border-gray-400 rounded-full py-3 px-3 text-gray-700 text-xs font-open font-light hover:border-black hover:bg-black hover:text-white transition duration-300 hover:shadow-lg"
    >
      <Icon height={15} width={15} className="fill-current" />
    </a>
  )
}

export default Item
