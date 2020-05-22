import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/home-layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
    <SEO title="404: Not found" />
    <div className="flex flex-col items-center">
      <h1 className="font-extrabold font-open text-white text-7xl -m-4">404</h1>
      <h3 className="font-light font-open text-md text-white">That's an error.</h3>
      <Link to="/" className="bg-white py-2 px-3 rounded-lg text-sm text-black font-open font-light mt-10">Go home</Link>
    </div>
  </div>
)

export default NotFoundPage
