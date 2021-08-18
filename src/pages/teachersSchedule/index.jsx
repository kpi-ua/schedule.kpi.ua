import React from 'react';
import style from './style.scss';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';

export const TeachersSchedule = () => (
  <div>
    <Header isTeachersSearch={true} />

    <h3>teachers schedule page</h3>
  </div>
);

export default TeachersSchedule;