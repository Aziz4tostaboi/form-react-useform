import React from "react";
import {Link} from "react-router-dom";
import styles from "./styles.module.scss"
const LinkComponent=(props)=>{
    const {
        title,
        link,
        to
    }=props
    return(
        <div>
            <span className={styles['span']}>{title}</span>
            <Link to={to} className={styles['Link']}>{link}</Link>
        </div>
    )
}
export default LinkComponent


