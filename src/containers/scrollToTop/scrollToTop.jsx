import { useEffect, Fragment } from 'react';

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

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
