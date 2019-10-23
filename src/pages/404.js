import React from "react"
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Keep moving. Nothing to see here.</p>
  </Layout>
)

export default NotFoundPage
