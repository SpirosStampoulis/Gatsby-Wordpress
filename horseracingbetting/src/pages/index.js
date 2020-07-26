import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
// import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

// export default IndexPage


// import PrimaryLayout from "../layouts/PrimaryLayout"
// import Post from "../components/Post"


export default ({ data }) => {
  console.log(data)
  return (
    <Layout column="col-xs-6">
      {data.allWordpressPost.nodes.map(node => (
        <Post
          // alt={node.featured_media.slug}
          // image={node.featured_media.path}
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
  allWordpressPost{
    nodes {
      slug
      title
      excerpt
      featured_media {
        path
        slug
      }
    }
  }
}
`