import React from 'react';
//import style from './style.scss';


export const Page404 = ({ location }) => (
  <React.Fragment>

    <h3>No match for <code>{location.pathname}</code></h3>
  </React.Fragment>
);

export default Page404;