import React, { useEffect, useState } from "react"
import { graphql } from 'gatsby'
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"
import { Profile } from '../components/user'

const PeoplePage = ({ data }) => {
    const staff = data.allPeopleYaml.edges
    const [displayedStaff, setDisplayedStaff] = useState(staff)
    const [query, setQuery] = useState('')

    const handleChangeQuery = event => {
        setQuery(event.target.value.toLowerCase())
    }

    useEffect(() => {
        setDisplayedStaff(staff.filter(edge => edge.node.name.toLowerCase().includes(query)))
    }, [query])

    return (
        <Layout>
            <SEO title="RENCI Staff" />
            
            <h1>Staff</h1>
            
            <div>
                <label htmlFor="staff-search">Filter by name:</label>
                <input name="staff-search" type="text" onChange={ handleChangeQuery } value={ query } />
            </div>

            <br/>

            {
                displayedStaff.map(({ node: person }) => (
                    <Profile key={ person.id } person={ person } />
                ))
            }

        </Layout>
    )
}

export const query = graphql`
    query {
        allPeopleYaml {
            edges {
                node {
                    id
                    name
                    teams {
                        id
                        name
                    }
                    groups {
                        id
                        name
                    }
                }
            }
        }
    }
`

export default PeoplePage
