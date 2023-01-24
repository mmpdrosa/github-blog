import logoImage from '../../assets/logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImage} alt="Header Cover" />
    </HeaderContainer>
  )
}
