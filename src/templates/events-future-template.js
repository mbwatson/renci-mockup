import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/layout'
import { Title } from '../components/typography'
import { ArrowLink } from '../components/link'

export default ({ data, pageContext }) => {
    // const events = data.events.edges

    return (
        <Container>
            <Title>Upcoming Events at RENCI</Title>
            <pre>{ JSON.stringify(data, null, 2) }</pre>
            <div>
                <ArrowLink to="/events/archive" text="View Past Events" float="right" />
            </div>
        </Container>
    )
}

export const futureEventsQuery = graphql`
    query($todaysDate: Date!) {
        events: allMarkdownRemark(
            filter: {
                fileAbsolutePath: {regex: "/data\/events/"}
                frontmatter: {dates: {start: {gte: $todaysDate}}}
            }
            sort: {fields: [frontmatter___dates___start], order: ASC},
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        slug
                        title
                        dates {
                            start
                            end
                        }
                    }
                    fileAbsolutePath
                    excerpt(pruneLength: 500)
                    html
                }
            }
        }
    }`