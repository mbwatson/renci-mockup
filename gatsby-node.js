const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = [
        `type ProjectsYaml implements Node {
            group: GroupsYaml @link(by: "projects.id", from: "id")
        }`,
        `type PeopleYaml implements Node {
            teams: [TeamsYaml] @link(by: "members.id", from: "id")
            groups: [GroupsYaml] @link(by: "members.id", from: "id")
            collaborations: [CollaborationsYaml] @link(by: "members.id", from: "id")
        }`,
        `type GroupsYaml implements Node {
            lead: PeopleYaml @link(by: "groups.id", from: "id")
        }`,
        `type CollaborationsYaml implements Node {
            lead: PeopleYaml @link(by: "collaborations.id", from: "id")
        }`,
     ]
    createTypes(typeDefs)
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const personTemplate = path.resolve(`src/templates/personTemplate.js`)
    const groupTemplate = path.resolve(`src/templates/groupTemplate.js`)
    const teamTemplate = path.resolve(`src/templates/teamTemplate.js`)
    const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
    const collaborationTemplate = path.resolve(`src/templates/collaborationTemplate.js`)

    return graphql(`
        {
            allPeopleYaml(sort: {fields: id, order: ASC}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            allGroupsYaml(sort: {fields: name, order: ASC}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            allTeamsYaml(sort: {fields: name, order: ASC}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            allProjectsYaml(sort: {fields: name, order: ASC}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            allCollaborationsYaml(sort: {fields: name, order: ASC}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        
        // Create person pages
        const people = result.data.allPeopleYaml.edges
        people.forEach(({ node }) => {
            createPage({
                id: node.id,
                path: `/people/${ node.id }`,
                component: personTemplate,
                context: { // additional data passed via context
                    id: node.id,
                },
            })
        })

        // Create group pages
        const groups = result.data.allGroupsYaml.edges
        groups.forEach(({ node }) => {
            createPage({
                id: node.id,
                path: `/groups/${ node.id }`,
                component: groupTemplate,
                context: { // additional data passed via context
                    id: node.id,
                },
            })
        })

        // Create project pages
        const projects = result.data.allProjectsYaml.edges
        projects.forEach(({ node }) => {
            createPage({
                id: node.id,
                path: `/projects/${ node.id }`,
                component: projectTemplate,
                context: { // additional data passed via context
                    id: node.id,
                },
            })
        })

        // Create team pages
        const teams = result.data.allTeamsYaml.edges
        teams.forEach(({ node }) => {
            createPage({
                id: node.id,
                path: `/teams/${ node.id }`,
                component: teamTemplate,
                context: { // additional data passed via context
                    id: node.id,
                },
            })
        })

        // Create collaboration pages
        const collaborations = result.data.allCollaborationsYaml.edges
        collaborations.forEach(({ node }) => {
            createPage({
                id: node.id,
                path: `/collaborations/${ node.id }`,
                component: collaborationTemplate,
                context: { // additional data passed via context
                    id: node.id,
                },
            })
        })

        return [...people, ...groups, ...projects, ...teams, ...collaborations]
    })
}