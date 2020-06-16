import React, { Fragment, useEffect, useState } from "react"
import { SEO } from '../components/seo'
import { Profile } from '../components/user'
import { usePeople } from '../hooks'

const PeoplePage = () => {
    const staff = usePeople()
    const [displayedStaff, setDisplayedStaff] = useState(staff)
    const [query, setQuery] = useState('')

    const handleChangeQuery = event => {
        setQuery(event.target.value.toLowerCase())
    }

    useEffect(() => {
        setDisplayedStaff(staff.filter(person => person.name.toLowerCase().includes(query)))
    }, [query, staff])

    return (
        <Fragment>
            <SEO title="RENCI Staff" />
            
            <h1>Staff</h1>
            
            {
                displayedStaff.map(person => (
                    <pre>{ JSON.stringify(person, null, 2) }</pre>
                ))
            }

        </Fragment>
    )
}

export default PeoplePage
