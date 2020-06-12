module.exports = {
    siteMetadata: {
        title: `RENCI`,
        description: `Renaissance Computing Institute`,
        author: `mbwatson`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true, // CommonMark mode (default: true)
                footnotes: true, // Footnotes mode (default: true)
                pedantic: true, // Pedantic mode (default: true)
                gfm: true, // GitHub Flavored Markdown mode (default: true)
                plugins: [], // Plugins configs
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `RENCI - Renaissance Computing Institute`,
                short_name: `RENCI`,
                start_url: `/`,
                background_color: `#00abc7`,
                theme_color: `#00abc7`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
    mapping: {
        // Show members as people objects in full for team, group, and collaboration queries--not just the corresponding id
        "TeamsYaml.members": `PeopleYaml`, // Link team members to people // defaults to PeopleYaml.id unless specified otherwise
        "TeamsYaml.lead": `PeopleYaml`, // Link team leads to person
        
        "GroupsYaml.members": `PeopleYaml`, // Link group members to people
        "GroupsYaml.lead": `PeopleYaml`, // Link group leads to person
        "GroupsYaml.projects": `ProjectsYaml`, // Show projects in full for group queries

        "CollaborationsYaml.members": `PeopleYaml`, // Link collaborationmembers to people
        
        // reverse
        "PeopleYaml.teams": `TeamsYaml`, // This does nothing
        "MarkdownRemark.frontmatter.author": "PeopleYaml",
    },
}
