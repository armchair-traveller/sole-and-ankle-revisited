import React from 'react'
import styled from 'styled-components/macro'

import { COLORS, WEIGHTS } from '../../constants'
import Logo from '../Logo'
import Icon from '../Icon'
import UnstyledButton from '../UnstyledButton'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import VisuallyHidden from '../VisuallyHidden'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  ${({ theme }) => theme.media.tablet} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid ${COLORS.gray[900]};
  }

  ${({ theme }) => theme.media.phone} {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`

const MobileActions = styled.div`
  display: none;

  ${({ theme }) => theme.media.tablet} {
    gap: 32px;
    display: flex;
  }

  ${({ theme }) => theme.media.phone} {
    gap: 16px;
  }
`

const LogoWrapper = styled.div`
  flex: 1;

  ${({ theme }) => theme.media.tablet} {
    flex: revert;
  }
`

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`

const Filler = styled.div`
  flex: 1;

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`

export const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

export default Header
