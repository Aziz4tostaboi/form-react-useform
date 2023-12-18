import React from "react";
import styles from "./styles.module.scss"
import googleIcon from "../../assets/img/Google__G__Logo 1 (1).png"

const GoogleComponent=()=>{

    return(
        <div>
            <div className={styles['container']}>
                <img src={googleIcon} alt="googleIcon" className={styles['googleIcon']}/>
                <h1 className={styles['title']}>Continue with Google</h1>
            </div>
             <h1 className={styles['or']}>OR</h1>
        </div>
    )
}
export default GoogleComponent