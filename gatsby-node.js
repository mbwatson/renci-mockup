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
            allProjectsYaml(sort: {fields: name, order: DESC}) {
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
            allMarkdownRemark(sort: {fields: frontmatter___publish_date, order: ASC}) {
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
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        
        // Create person pages
        const people = result.data.allPeopleYaml.edges
        console.log(`\nCreating staff pages...`)
        people.forEach(({ node }) => {
            console.log(` - Creating staff page for ${ node.name } (id: ${ node.id })`)
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
        console.log(`\nCreating group pages...`)
        groups.forEach(({ node }) => {
            console.log(` - Creating group page for ${ node.name } (id: ${ node.id })`)
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
        console.log(`\nCreating project pages...`)
        projects.forEach(({ node }) => {
            console.log(` - Creating project page for ${ node.name } (id: ${ node.id })`)
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
        console.log(`\nCreating team pages...`)
        teams.forEach(({ node }) => {
            console.log(` - Creating team page for ${ node.name } (id: ${ node.id })`)
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
        console.log(`\nCreating collaboration pages...`)
        collaborations.forEach(({ node }) => {
            console.log(` - Creating collaboration page for ${ node.name } (id: ${ node.id })`)
            createPage({
                id: node.id,
                path: `/collaborations/${ node.id }`,
                component: collaborationTemplate,
                context: { // additional data passed via context
                    id: node.id,
                },
            })
        })

        // Create news article pages
        const articles = result.data.allMarkdownRemark.edges.filter(({ node }) => node.fileAbsolutePath.includes('/news/'))
        console.log(`\nCreating news pages...`)
        articles.forEach(({ node }, index) => {
            const matches = node.fileAbsolutePath.match(/data\/news\/(\d{4}\/\d{2})\/.+\/index.md$/)
            if (matches) {
                const [, yyyydd] = matches
                const path = `news/${ yyyydd }/${ node.frontmatter.slug }`
                console.log(` - Creating news page for ${ node.frontmatter.title } (${ path })`)
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

        return [...people, ...groups, ...projects, ...teams, ...collaborations, ...articles]
    })
}