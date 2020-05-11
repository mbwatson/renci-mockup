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
    }, [query])

    return (
        <Fragment>
            <SEO title="RENCI Staff" />
            
            <h1>Staff</h1>
            
            <div>
                <label htmlFor="staff-search">Filter by name:</label>
                <input name="staff-search" type="text" onChange={ handleChangeQuery } value={ query } />
            </div>

            <br/>

            {
                displayedStaff.map(person => (
                    <Profile key={ person.id } person={ person } />
                ))
            }

        </Fragment>
    )
}

export default PeoplePage
