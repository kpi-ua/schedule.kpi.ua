import { Fragment, useEffect } from 'react';

import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history, children }: any) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    return () => {
      unlisten();
    }
  }, [history]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);