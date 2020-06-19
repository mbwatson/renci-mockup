import React from 'react'
import styled from 'styled-components'

const StaffList = styled.div``

const Wrapper = styled.div`
    border: 1px solid #ff999966;
    display: flex;
    flex-direction: row;
    & ${ StaffList } {
        flex: 1;
    }
`

const LetterLink = styled.a(({ theme }) => `
    text-decoration: none;
    padding: 0.25rem 0;
`)

const LettersMenu = styled.nav(({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: ${ theme.spacing.small };
`)

const buckets = {
    'A': [], 'B': [], 'C': [], 'D': [], 'E': [], 'F': [], 'G': [], 'H': [], 'I': [], 'J': [], 'K': [], 'L': [], 'M': [],
    'N': [], 'O': [], 'P': [], 'Q': [], 'R': [], 'S': [], 'T': [], 'U': [], 'V': [], 'W': [], 'X': [], 'Y': [], 'Z': [],
}


export const StaffBrowser = ({ staff }) => {
    return (
        <Wrapper>
            <LettersMenu>
                { Object.keys(buckets).map(letter => <LetterLink href="#">{ letter }</LetterLink>) }
            </LettersMenu>
            <StaffList>
                {
                    staff.slice(0, 10).map(({ id, name, title }) => {
                        return (
                            <pre key={ id }>{ JSON.stringify(({ id, name, title }), null, 2) }</pre>
                        )
                    })
                }
            </StaffList>
        </Wrapper>
    )
}