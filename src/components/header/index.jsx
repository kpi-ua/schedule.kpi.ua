import React from 'react';
import style from './style.scss';
import { GroupSearch } from '../groupSearch';
import { NameSearch } from '../nameSearch';
import { Link } from 'react-router-dom';
//TODO: add logo
// import rozkladLogo from '';

export const Header = ({isMobile, isTeachersSearch}) => (
  <React.Fragment>
    {/* add logo */}
    {/* <img src={rozkladLogo} className={style.logo}></img> */}
    {isTeachersSearch ? <NameSearch/> : <GroupSearch />}
    <ul>
      <li>
        <Link to="/">Students schedule</Link>
      </li>
      <li>
        <Link to="/sessions">Sessions schedule</Link>
      </li>
      <li>
        <Link to="/teachers">Teachers schedule</Link>
      </li>
    </ul>
    <hr />
    <div>!TODO: create responsive header</div>
  </React.Fragment>
);

export default Header;