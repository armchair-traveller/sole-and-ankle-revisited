import React from 'react'
import styled from 'styled-components/macro'

import { WEIGHTS } from '../../constants'

import Breadcrumbs from '../Breadcrumbs'
import Select from '../Select'
import Spacer from '../Spacer'
import ShoeSidebar from '../ShoeSidebar'
import ShoeGrid from '../ShoeGrid'

const ShoeBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  )
}

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileBreadcrumbs>
              <ShoeBreadcrumbs />
            </MobileBreadcrumbs>
            <Title>Running</Title>
          </div>

          <SortFilterWrapper>
            <Select label="Sort" value={sortId} onChange={(ev) => setSortId(ev.target.value)}>
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SortFilterWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadcrumbs>
          <ShoeBreadcrumbs />
        </DesktopBreadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`

const LeftColumn = styled.div`
  flex-basis: 248px;

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`

const MainColumn = styled.div`
  flex: 1;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  ${({ theme }) => theme.media.tablet} {
    align-items: flex-end;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`

const DesktopBreadcrumbs = styled.div`
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`
const MobileBreadcrumbs = styled.div`
  display: none;

  ${({ theme }) => theme.media.tablet} {
    display: revert;
  }
`

const SortFilterWrapper = styled.div`
  ${({ theme }) => theme.media.phone} {
    display: none;
  }
`

export default ShoeIndex
