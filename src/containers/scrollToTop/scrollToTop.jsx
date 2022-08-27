import { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// Scroll to top on location change
const ScrollToTop = ({ history, children }) => {
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
