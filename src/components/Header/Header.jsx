import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'
import { Dropdown } from 'react-bootstrap'
import log from '../../image/logo/chasy_kg_logo-b.png'
const Header = () => {
  return (
    <div>
      <ul className={s.menu}>
    <li>
      <img src={log} />
    </li>
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    КАТАЛОГ ЧАСОВ
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Мужские часы</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Женские часы</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Спортивные часы</Dropdown.Item>
    <Dropdown.Item href="#/action-4">Механические часы</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

        <li>
          <NavLink to="/">Главный</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Акция</NavLink>
        </li>
       
        <li>
          <NavLink to="/feratures">О нас</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Контакты</NavLink>
        </li>

      </ul>
    </div>
  )
}

export default Header