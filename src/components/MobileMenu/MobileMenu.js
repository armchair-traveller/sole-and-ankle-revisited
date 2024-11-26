/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'
import { NavLink } from '../Header/Header'
import { COLORS } from '../../constants'

const MobileMenu = ({ isOpen, onDismiss }) => {
  const dialogRef = useRef(null)
  useEffect(() => {
    dialogRef.current?.showModal(isOpen)
    if (!isOpen) onDismiss()
  }, [isOpen])
  if (!isOpen) {
    return null
  }

  return (
    <Dialog ref={dialogRef}>
      <CloseButton onClick={onDismiss}>
        <Icon id="close" />
        <VisuallyHidden>Dismiss menu</VisuallyHidden>
      </CloseButton>
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>

      <Footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </Footer>
    </Dialog>
  )
}

export default MobileMenu

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`

const Dialog = styled.dialog`
  position: fixed;
  inset: 0;
  margin: 0;
  margin-left: auto;
  border: none;
  z-index: 999; /* not optimal compared to a portal but this implementation is lightweight  */
  height: 100%;
  padding-right: 10vh;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 32px;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 32px;
`

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[700]};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
