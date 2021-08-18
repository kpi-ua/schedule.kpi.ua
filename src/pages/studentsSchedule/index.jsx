import React from 'react';
import style from './style.scss';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';

export const StudentsSchedule = () => (
  <React.Fragment>
    <Header isTeachersSearch={false}/>

    <h3>students schedule page</h3>
  </React.Fragment>
);

export default StudentsSchedule;