import styles from "./Nav.module.css"
import { Link, useRouteMatch } from "react-router-dom";

const Nav = () => {
    const { url } = useRouteMatch();

    return (
        <nav className={styles.nav}>
            <Link to={`${url}/contacts`} className={styles.active}>Contacts</Link>
            <Link to={`${url}/my-profile`}>My Profile</Link>
            <Link to={`${url}/settings`}>Settings</Link>
        </nav>
    )
}

export default Nav;