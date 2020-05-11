import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Link } from 'gatsby'
import { Card, CardHeader, CardBody } from '../components/card'
import { Heading } from '../components/typography'
import { useProjects } from '../hooks'

const ProjectsPage = () => {
    const projects = useProjects()

    return (
        <Fragment>
            <SEO title="RENCI Projects" />
            
            <h1>Projects</h1>

            {
                projects.map(project => (
                    <Card key={ project.id }>
                        <CardHeader>
                            <Heading><Link to={ `/projects/${ project.id }` }>{ project.name }</Link></Heading>
                        </CardHeader>

                        <CardBody>
                            <p>{ project.description }</p>
                        </CardBody>
                        
                    </Card>
                ))
            }

        </Fragment>
    )
}

export default ProjectsPage
