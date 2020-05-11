import React from "react"
import { SEO } from "../components/seo"
import { DefaultLayout } from "../components/layout"

const NotFoundPage = () => (
  <DefaultLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Keep moving. Nothing to see here.</p>
  </DefaultLayout>
)

export default NotFoundPage
