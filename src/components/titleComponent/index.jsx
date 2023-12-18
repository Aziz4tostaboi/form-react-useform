import React from "react";
import styles from "./styles.module.scss"

const TitleComponent=(props)=>{
    const {
      title,
      text
    }=props
    return(
        <div className={styles['container']}>
            <h1 className={styles['title']}>{title}</h1>
            <span className={styles["text"]}>{text}</span>
        </div>
    )
}
export default TitleComponent
