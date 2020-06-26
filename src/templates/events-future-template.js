import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/layout'
import { Title } from '../components/typography'

export default ({ data, pageContext }) => {
    // const events = data.events.edges

    return (
        <Container>
            <Title>Upcoming Events at RENCI</Title>
            <pre>{ JSON.stringify(data, null, 2) }</pre>
        </Container>
    )
}

export const futureEventsQuery = graphql`
    query($todaysDate: Date!) {
        events: allMarkdownRemark(
            sort: {fields: frontmatter___dates___start, order: ASC},
            filter: {
                fileAbsolutePath: {regex: "/data/events/"}
                frontmatter: {dates: {start: {gte: $todaysDate}}}
            }
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