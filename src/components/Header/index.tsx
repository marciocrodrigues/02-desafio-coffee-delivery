import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import logo from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" />
        <nav>
          <span>
            <MapPin size={22} />
            Porto Alegre, RS
          </span>
          <NavLink to="/checkout">
            <ShoppingCart size={22} />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
