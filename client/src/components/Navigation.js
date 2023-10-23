import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/Navigation.module.css";
import { useState } from "react";

const Navigation = () => {
    const navigate = useNavigate();

    const [navOpen, setNavOpen] = useState(false);

    // const logoutHandler = () => {
    //     dispatch(authActions.logout());
    //     window.localStorage.removeItem("auth");
    //     navigate("/login");
    // };

    const closeNav = () => {
        navOpen(false);
    };

    const toggleMenu = () => {
        setNavOpen((prevState) => !prevState);
    };

    const active = window.location.pathname;

    return (
        <nav className={styles.nav}>
            <div className={styles.navSec}>
                <div>Company</div>
                <Link
                    to="/"
                    className={`${styles.links} ${
                        active === "/" && styles.active
                    }`}
                >
                    People
                </Link>

                <div>Violations</div>
                <div>Statistics</div>

                <Link
                    to="/settings"
                    className={`${styles.links} ${
                        active === "/settings" && styles.active
                    }`}
                >
                    Settings
                </Link>
            </div>
            <div className={styles.navSec}>
                <div>Profile</div>
                <div>Logout</div>
            </div>
            {/* {navOpen && <div className={styles.mobNav}></div>} */}
            {/* <div className={styles.options}>
                {!navOpen && (
                    <List
                        size={32}
                        className={styles.menu}
                        onClick={toggleMenu}
                    />
                )}
                {navOpen && (
                    <X size={32} className={styles.menu} onClick={toggleMenu} />
                )}
            </div> */}
        </nav>
    );
};

export default Navigation;
