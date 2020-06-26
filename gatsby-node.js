const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
        type PeopleYaml implements Node {
            teams: [TeamsYaml] @link(by: "members.id", from: "id")
            groups: [GroupsYaml] @link(by: "members.id", from: "id")
            collaborations: [CollaborationsYaml] @link(by: "members.id", from: "id")
        }
    `
    createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
    const resolvers = {
        PeopleYaml: {
            teams: {
                type: ["TeamsYaml"],
                resolve(source, args, context, info) {
                    return context.nodeModel.runQuery({
                        query: {
                            filter: {
                                members: {
                                    elemMatch: {
                                        id: {
                                            eq: source.id,
                                        }
                                    }
                                }
                            }
                        },
                        type: "TeamsYaml",
                        firstOnly: false,
                    })
                }
            },
            groups: {
                type: ["GroupsYaml"],
                resolve(source, args, context, info) {
                    return context.nodeModel.runQuery({
                        query: {
                            filter: {
                                members: {
                                    elemMatch: {
                                        id: {
                                            eq: source.id,
                                        }
                                    }
                                }
                            }
                        },
                        type: "GroupsYaml",
                        firstOnly: false,
                    })
                }
            },
            collaborations: {
                type: ["CollaborationsYaml"],
                resolve(source, args, context, info) {
                    return context.nodeModel.runQuery({
                        query: {
                            filter: {
                                members: {
                                    elemMatch: {
                                        id: {
                                            eq: source.id,
                                        }
                                    }
                                }
                            }
                        },
                        type: "CollaborationsYaml",
                        firstOnly: false,
                    })
                }
            },
        }
    }
    createResolvers(resolvers)
}
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const personTemplate = path.resolve(`src/templates/person-template.js`)
    const groupTemplate = path.resolve(`src/templates/group-template.js`)
    const teamTemplate = path.resolve(`src/templates/team-template.js`)
    const projectTemplate = path.resolve(`src/templates/project-template.js`)
    const collaborationTemplate = path.resolve(`src/templates/collaboration-template.js`)
    const newsArticleTemplate = path.resolve(`src/templates/news-article-template.js`)
    const eventTemplate = path.resolve(`src/templates/event-template.js`)
    const eventsFutureTemplate = path.resolve(`src/templates/events-future-template.js`)
    const eventsPastTemplate = path.resolve(`src/templates/events-past-template.js`)

    return graphql(`
        {
            people: allPeopleYaml(sort: {fields: id, order: ASC}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            groups: allGroupsYaml(sort: {fields: name, order: ASC}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            teams: allTeamsYaml(sort: {fields: name, order: ASC}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            projects: allProjectsYaml(sort: {fields: name, order: DESC}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            collaborations: allCollaborationsYaml(sort: {fields: name, order: ASC}) {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            news: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/news/"}},
                sort: {fields: frontmatter___publish_date, order: DESC}
            ) {
                edges {
                    node {
                        fileAbsolutePath
                        frontmatter {
                            slug
                            title
                            publish_date(formatString: "MMMM DD, YYYY")
                        }
                    }
                }
            }
            events: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/events/"}},
                sort: {fields: frontmatter___dates___start, order: ASC}
            ) {
                edges {
                    node {
                        fileAbsolutePath
                        frontmatter {
                            slug
                            title
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        
        /**
         * Create person pages
         */

        const people = result.data.people.edges
        console.log(`\nCreating staff pages...`)
        people.forEach(({ node }) => {
            const path = `/people/${ node.id }`
            console.log(` - ${ node.name } (${ path })`)
            createPage({
                id: node.id,
                path: path,
                component: personTemplate,
                context: { // additional data passed via context
                    id: node.id,
                },
            })
        })

        /**
         * Create group pages
         */

        const groups = result.data.groups.edges
        console.log(`\nCreating group pages...`)
        groups.forEach(({ node }) => {
            const path = `/groups/${ node.id }`
            console.log(` - ${ node.name } (${ path })`)
            createPage({
                id: node.id,
                path: path,
                component: groupTemplate,
                context: { // additional data passed via context
                    id: node.id,
                },
            })
        })

        /**
         * Create project pages
         */

        const projects = result.data.projects.edges
        console.log(`\nCreating project pages...`)
        projects.forEach(({ node }) => {
            const path = `/projects/${ node.id }`
            console.log(` - ${ node.name } (${ path })`)
            createPage({
                id: node.id,
                path: path,
                component: projectTemplate,
                context: { // additional data passed via context
                    id: node.id,
                },
            })
        })

        /**
         * Create team pages
         */

        const teams = result.data.teams.edges
        console.log(`\nCreating team pages...`)
        teams.forEach(({ node }) => {
            const path = `/teams/${ node.id }`
            console.log(` - ${ node.name } (${ path })`)
            createPage({
                id: node.id,
                path: path,
                component: teamTemplate,
                context: { // additional data passed via context
                    id: node.id,
                },
            })
        })

        /**
         * Create collaboration pages
         */

        const collaborations = result.data.collaborations.edges
        console.log(`\nCreating collaboration pages...`)
        collaborations.forEach(({ node }) => {
            const path = `/collaborations/${ node.id }`
            console.log(` - ${ node.name } (${ path })`)
            createPage({
                id: node.id,
                path: path,
                component: collaborationTemplate,
                context: { // additional data passed via context
                    id: node.id,
                },
            })
        })

        /**
         * Create news article pages
         */

        const articles = result.data.news.edges
        console.log(`\nCreating news pages...`)
        articles.forEach(({ node }, index) => {
            const matches = node.fileAbsolutePath.match(/data\/news\/(\d{4}\/\d{2})\/.+\/index.md$/)
            if (matches) {
                const [, yyyydd] = matches
                const path = `/news/${ yyyydd }/${ node.frontmatter.slug }`
                console.log(` - ${ node.frontmatter.title } (${ path })`)
                createPage({
                    path: path,
                    component: newsArticleTemplate,
                    context: { // additional data passed via context
                        slug: node.frontmatter.slug,
                        prev: index === 0 ? null : articles[index - 1].node,
                        next: index === articles.length - 1 ? null : articles[index + 1].node,
                    },
                })
            }
        })

        /**
         * Create event pages
         */

        const events = result.data.events.edges
        console.log(`\nCreating event pages...`)
        events.forEach(({ node }, index) => {
            const matches = node.fileAbsolutePath.match(/data\/events\/(\d{4}\/\d{2})\/.+.md$/)
            if (matches) {
                const [, yyyydd] = matches
                const path = `/events/${ yyyydd }/${ node.frontmatter.slug }`
                console.log(` - ${ node.frontmatter.title } (${ path })`)
                createPage({
                    path: path,
                    component: eventTemplate,
                    context: { // additional data passed via context
                        slug: node.frontmatter.slug,
                        prev: index === 0 ? null : events[index - 1].node,
                        next: index === events.length - 1 ? null : events[index + 1].node,
                    },
                })
            }
        })

        /**
         * Create events pages
         */

        console.log(`\nCreating events list pages...`)

        const todaysDate = new Date()
        const dateString = `${ todaysDate.getFullYear() }-${ todaysDate.getMonth() + 1 < 10 ? '0' : '' }${ todaysDate.getMonth() + 1 }-${ todaysDate.getDate()  < 10 ? '0' : '' }${ todaysDate.getDate() }`

        console.log(` - Future events (/events)`)
        createPage({
            path: '/events',
            component: eventsFutureTemplate,
            context: {
                todaysDate: dateString,
            },
        })
        
        console.log(` - Past events (/events/archive)`)
        createPage({
            path: '/events/archive',
            component: eventsPastTemplate,
            context: {
                todaysDate: dateString,
            },
        })

        return [
            ...people,
            ...groups,
            ...projects,
            ...teams,
            ...collaborations,
            ...articles,
            ...events,
        ]
    })
}