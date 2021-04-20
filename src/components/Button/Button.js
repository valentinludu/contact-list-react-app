import styles from "./Button.module.css";

const Button = ({fullWidth = false, buttonBg ="#011393", ...props}) => {
    return <button className={`${fullWidth ? styles.customButtonFullWidth : ""} ${styles.customButton}`} style={{background: buttonBg}} {...props}></button>
};

export default Button;