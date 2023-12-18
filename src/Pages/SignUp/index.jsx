import React from "react";
import TitleComponent from "../../components/titleComponent";
import ImgComponent from "../../components/imgComponent";
import GoogleComponent from "../../components/googleComponent";
import SignUpComponents from "../../components/signUpComponents";
import styles from "./styles.module.scss"
import LinkComponent from "../../components/linkComponent";

const SignUp=()=>{
    return(
        <div className={styles['container']}>
            <ImgComponent/>
            <TitleComponent title="Create an Accout" text="Sign up now to get stardet with an accout"/>
            <GoogleComponent/>
            <SignUpComponents/>
            <LinkComponent to="/" title="Already have an account?" link="Log in"></LinkComponent>
        </div>
    )
}
export default SignUp