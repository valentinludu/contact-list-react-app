import { Redirect } from "react-router";
import { useLogin } from "../../hooks/useLogin";
import LoginForm from "../../components/LoginForm";
import Loading from "../../components/Loading"
import Logo from "./assets/pink_phone_logo.png";
import styles from  "./Login.module.css";
import { useContactListContext } from "../../hooks/useContactListContext";

const Login = () => {
    const { contactListApp, setContactListApp } = useContactListContext();
    const loggedIn = contactListApp.user.email;

    const { loading, handleLoginSubmit } = useLogin(setContactListApp);

    if(loggedIn) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBg} />
            <div className={styles.loginFilter} />
            <div className={styles.loginWrapper}>
                <header className={styles.loginHeader}>
                    <img src={Logo} alt="logo" />
                    <h1>Welcome!</h1> 
                </header>
                <div className={styles.loginFormContainer}>
                    {loading ? <Loading /> : <LoginForm handleSubmit={handleLoginSubmit} />}
                </div>
            </div>
        </div>
    )
};

export default Login;