'use client'

import styled from 'styled-components'

export const Column20 = styled.div`
    @media (min-width: 992px) {
        flex: 0 0 25%;
        max-width: 25%;
    }
    @media (min-width: 1200px) {
        flex: 0 0 20%;
        max-width: 20%;
    }
`

export const Column80 = styled.div`
    @media (min-width: 992px) {
        flex: 0 0 75%;
        max-width: 75%;
    }
    @media (min-width: 1200px) {
        flex: 0 0 80%;
        max-width: 80%;
    }
`

export const Grid = styled.div`
    display: flex;
`