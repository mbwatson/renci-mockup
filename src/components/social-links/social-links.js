import React from 'react'
import styled from 'styled-components'
import { LinkIcon, TwitterIcon, GitHubIcon } from '../icons'

const SocialLinksWrapper = styled.div(({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    svg {
        fill: ${ theme.color.primary.main };
    }
    a {
        margin: 0 ${ theme.spacing.small };
        transition: filter 250ms;
    }
    a:hover {
        filter: brightness(0.5);
    }
`)

export const SocialLinks = ({ url, twitter, github }) => {
    return (
        <SocialLinksWrapper>
            { url && <a href={ url } aria-label="View Website" target="_blank" rel="noopener noreferrer"><LinkIcon size={ 24 } /></a> }
            { twitter && <a href={ `https://twitter.com/${ twitter }` } aria-label="View Twitter Profile" target="_blank" rel="noopener noreferrer"><TwitterIcon size={ 24 } /></a> }
            { github && <a href={ `https://github.com/${ github }` } aria-label="View GitHub Page" target="_blank" rel="noopener noreferrer"><GitHubIcon size={ 24 } /></a> }
        </SocialLinksWrapper>
    )
}
