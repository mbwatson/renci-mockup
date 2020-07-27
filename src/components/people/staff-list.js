import React from 'react'
import styled from 'styled-components'
import { MiniProfile } from './mini-profile'
import { useAvatar } from '../../hooks'

const Wrapper = styled.div`
    border: 1px solid #ff999966;
    display: flex;
    flex-direction: row;
`

// const LetterLink = styled.a(({ theme }) => `
//     text-decoration: none;
//     padding: 0.25rem 0;
// `)

// const LettersMenu = styled.nav(({ theme }) => `
//     position: sticky;
//     top: 0;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//     padding: ${ theme.spacing.small };
// `)

// const buckets = {
//     'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': [], 'G': [], 'H': [], 'I': [], 'J': [], 'K': [], 'L': [], 'M': [],
//     'N': [], 'O': [], 'P': [], 'Q': [], 'R': [], 'S': [], 'T': [], 'U': [], 'V': [], 'W': [], 'X': [], 'Y': [], 'Z': [],
// }

const Profiles = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`

export const StaffList = ({ staff = [] }) => {
    const avatar = useAvatar()
    return (
        <Wrapper>
            <Profiles>
                {
                    staff.map(person => {
                        const photo = person.photo ? person.photo.childImageSharp.fixed : avatar.childImageSharp.fixed
                        return (
                            <MiniProfile
                                key={ person.id }
                                name={ person.name }
                                title={ person.title }
                                photo={ photo }
                                path={ person.fields.path }
                            />
                        )
                    })
                }
            </Profiles>
        </Wrapper>
    )
}

//            <LettersMenu>
//                { Object.keys(buckets).map(letter => <LetterLink key={ letter } href="#">{ letter }</LetterLink>) }
//            </LettersMenu>
