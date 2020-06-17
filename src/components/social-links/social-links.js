import React from 'react'
import styled, { useTheme } from 'styled-components'
import { LinkIcon, TwitterIcon, GitHubIcon } from '../icons'

const SocialLinksWrapper = styled.div(({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    svg {
        fill: ${ theme.color.primary.main };
    }
    a {
        transition: filter 250ms;
    }
    a:hover {
        filter: brightness(0.5);
    }
`)

export const SocialLinks = ({ url, twitter, github }) => {
    const theme = useTheme()
    return (
        <SocialLinksWrapper>
            { url && <a href={ url } target="_blank" rel="noopener noreferrer"><LinkIcon size={ 24 } /></a> }
            { twitter && <a href={ `https://twitter.com/${ twitter }` } target="_blank" rel="noopener noreferrer"><TwitterIcon size={ 24 } /></a> }
            { github && <a href={ `https://github.com/${ github }` } target="_blank" rel="noopener noreferrer"><GitHubIcon size={ 24 } /></a> }
        </SocialLinksWrapper>
    )
}
