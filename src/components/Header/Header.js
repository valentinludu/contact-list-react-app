import { ReactComponent as Logo } from "./assets/pink_phone_logo_white.svg";
import { ReactComponent as SearchIcon } from "./assets/search_icon.svg";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Logo />
            </div>
            <div>
                <h1 className={styles.title}>Contacts</h1>
            </div>
            <div>
                <SearchIcon />
            </div>
        </header>
    )
};

export default Header;