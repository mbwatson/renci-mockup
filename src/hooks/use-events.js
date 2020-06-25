import { graphql, useStaticQuery } from 'gatsby'

const eventsQuery = graphql`{
    events: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/events/"}}) {
        edges {
            node {
                id
                frontmatter {
                    title
                    slug
                    dates {
                        start
                        end
                    }
                    spotlight
                    location
                    hosted_by_renci
                }
                fileAbsolutePath
                excerpt(pruneLength: 500)
                html
            }
        }
    }
}`

export const useEvents = () => {
    const { events } = useStaticQuery(eventsQuery)
    events.edges.forEach(({ node }) => {
        const matches = node.fileAbsolutePath.match(/data\/news\/(\d{4})\/(\d{2})\/.+\/index.md$/)
        if (matches) {
            const [, yyyy, dd] = matches
            node.path = `/events/${ yyyy }/${ dd }/${ node.frontmatter.slug }`
        }
    })
    return events.edges.map(({ node }) => node)
}
