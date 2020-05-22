import React from "react"
import rehypeReact from "rehype-react"
import { checkPropTypes } from "prop-types"

const heading1 = props => (
  <h1 className="text-3xl font-lato font-extrabold text-gray-900">
    {props.children}
  </h1>
)

const heading2 = props => (
  <h2 className="my-4 text-2xl font-lato font-extrabold text-gray-900">
    {props.children}
  </h2>
)

const heading3 = props => (
  <h3 className="my-4 font-lato text-3/4xl font-bold text-gray-800">
    {props.children}
  </h3>
)

const heading4 = props => (
  <h4 className="my-4 font-xl font-lato text-2/4xl font-bold text-gray-800">
    {props.children}
  </h4>
)

const heading5 = props => (
  <h5 className="my-3 font-lato text-1/4xl font-bold text-gray-700">
    {props.children}
  </h5>
)

const heading6 = props => (
  <h6 className="my-3 font-lato text-lg font-bold text-gray-700">
    {props.children}
  </h6>
)

const bold = props => (
  <strong className="font-semibold text-gray-900">{props.children}</strong>
)

const paragraph = props => (
  <p className="font-lato my-4 text-gray-700 font-normal leading-relaxed text-lg">
    {props.children}
  </p>
)

const divider = props => (
  <div className="w-full my-12 flex flex-row justify-center">
    <hr className="max-w-lg m-0 w-full border-2 border-gray-200" />
  </div>
)

const unorderedList = props => (
  <ul className="list-disc my-4 pl-8">{props.children}</ul>
)

const listItem = props => (
  <li className="font-lato my-4 text-gray-700 font-normal leading-relaxed text-lg">
    {props.children}
  </li>
)

const link = props => (
    <a {...props} className="border-b-2 border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-800 transition duration-300">
      {props.children}
    </a>
)

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: heading1,
    h2: heading2,
    h3: heading3,
    h4: heading4,
    h5: heading5,
    h6: heading6,
    strong: bold,
    p: paragraph,
    hr: divider,
    ul: unorderedList,
    li: listItem,
    a: link
  },
}).Compiler

export default renderAst
