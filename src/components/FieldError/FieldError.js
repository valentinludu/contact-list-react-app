import React from "react";
import styles from "./FieldError.module.css";
import { ReactComponent as ErrorIcon } from "./assets/icon_error.svg";

const FieldError = ({error}) => {
    if(!error) return null;

    return <div className={styles.fieldError}><span><ErrorIcon /></span>{error}</div>
};

export default FieldError;