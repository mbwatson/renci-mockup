import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/layout'
import { Title } from '../components/typography'

export default ({ data, pageContext }) => {
    const events = data.events.edges
    
    return (
        <Container>
            <Title>Events Archive</Title>
            <pre>{ JSON.stringify(events, null, 2) }</pre>
        </Container>
    )
}

export const pastEventsQuery = graphql`
    query($todaysDate: Date!) {
        events: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/data\/events/" }
                frontmatter: { dates: { start: { lt: $todaysDate } } }
            }
            sort: {fields: frontmatter___dates___start, order: DESC}
        ) {
            edges {
                node {
                    fileAbsolutePath
                    frontmatter {
                        slug
                        title
                        dates {
                            start
                            end
                        }
                    }
                }
            }
        }
    }`