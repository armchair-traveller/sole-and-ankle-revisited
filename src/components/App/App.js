import React from 'react'
import styled from 'styled-components/macro'
import { ThemeProvider } from 'styled-components'

import Header from '../Header'
import ShoeIndex from '../ShoeIndex'
const theme = {
  breakpoints: {
    phone: '37.5rem', // 600px
    tablet: '59.375rem', // 950px
    laptop: '81.25rem', // 1300px
  },
  // * example: @media (max-width: ${({ theme }) => theme.breakpoints.tablet})
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
