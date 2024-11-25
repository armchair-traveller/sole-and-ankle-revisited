import React from 'react'
import styled from 'styled-components/macro'
import { ThemeProvider } from 'styled-components'

import Header from '../Header'
import ShoeIndex from '../ShoeIndex'

const breakpoints = {
  phone: 37.5, // rem
  tablet: 59.375, // rem
  laptop: 81.25, // rem
}

const theme = {
  breakpoints,
  // A media utility that simplifies media query usage
  media: {
    phone: `@media (max-width: ${breakpoints.phone}rem)`,
    tablet: `@media (max-width: ${breakpoints.tablet}rem)`,
    laptop: `@media (max-width: ${breakpoints.laptop}rem)`,
  },
  // * example: ${theme.media.phone} { ... }
}

const App = () => {
  const [sortId, setSortId] = React.useState('newest')

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <ShoeIndex sortId={sortId} setSortId={setSortId} />
        </Main>
      </ThemeProvider>
    </>
  )
}

const Main = styled.main`
  padding: 64px 32px;
`

export default App
