
import React from "react";
import styles from "./styles.module.scss"

const Chekbox=(props)=>{
    const {
        link,
        text,
        title,
    }=props
    return(
        <div className={styles['box']}>
            <span className={styles['text']}>{text}</span>
            <h1 className={styles['title']}>{title}</h1>
            <p className={styles['link']}>{link}</p>
        </div>
    )
}
export default Chekbox